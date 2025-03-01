import IAutoLogResult from "@/interfaces/IAutoLogResult"

interface gameLogInfo {
    usernameOrEmail: String,
    password: String,
    date: Date
}

function logout(headers: Headers, succeed: boolean, message: String): IAutoLogResult
{
    const request = new Request("https://api.amoursucre-newgen.com/api/authentication/logout", {
        method: "POST",
        headers: headers
    })
    
    return {
        succeed: succeed,
        message: message,
        date: new Date(Date.now()).toString()
    }
}

async function connection(gameLogInfo): Promise<string> {

    let body = JSON.stringify({
        "email": gameLogInfo.usernameOrEmail,
        "password": gameLogInfo.password}
    )
    const headers: Headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": String(body.length),
    })
    const request: RequestInfo = new Request("https://api.amoursucre-newgen.com/api/authentication/login/email-password", {
                                            method: "POST",
                                            headers: headers,
                                            body: body
    })

    const response = await fetch(request)
    if (response.status != 200)
        throw logout(headers, false, "Error " + response.status + ": Connection to AmourSucre Failed.")

    let apiKey = (await response.json())?.["data"]?.["apiKey"]
    if (apiKey == undefined)
        throw logout(headers, false, "Authorization not found")
    return apiKey
}

async function findDayToCollect(apiKey: String): Promise<Number> {
    const headers: Headers = new Headers({
        "Authorization": `Bearer ${apiKey}`
    })
    const request: RequestInfo = new Request("https://api.amoursucre-newgen.com/api/connection-calendar", {
                                            method: "GET",
                                            headers: headers
    })

    const response = await fetch(request)
    if (response.status != 200) {
        throw logout(headers, false, "Impossible to get calendar")
    }
    let calendar: [] = (await response.json())?.["data"]?.["days"]
    let calendarDay = undefined
    for (let i = 0; i < calendar.length; i++) {
        if (calendar[i]["status"] == "available")
            calendarDay = calendar[i]["dayNumber"]
    }
    if (calendarDay == undefined)
        throw logout(headers, true, "Already collected")
    
    return calendarDay
}

async function collect(apiKey: String): Promise<IAutoLogResult> {
    const headers: Headers = new Headers({
        "Authorization": `Bearer ${apiKey}`
    })
    const request = new Request("https://api.amoursucre-newgen.com/api/connection-calendar/collect", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({"dayNumber": await findDayToCollect(apiKey)})
    })

    const response = await fetch(request)
    if (response.status != 200)
        throw logout(headers, false, "Something wrong during collect")
    return logout(headers, true, "PA collected")
}

export default async function AmourSucreNewGenAutoLog(gameLogInfo): Promise<IAutoLogResult> {
    let autoLogResult: Promise<IAutoLogResult> = {  succeed: false,
                                                    message: "Error not documented",
                                                    date: new Date(Date.now().toString())
                                                }
    autoLogResult = connection(gameLogInfo)
    .then((apiKey) => {return collect(apiKey)})
    .catch((autoLogBadResult) => (autoLogResult = autoLogBadResult))

    return autoLogResult
}

// export default async function AmourSucreNewGenAutoLog(gameLogInfo: gameLogInfo): Promise<IAutoLogResult> {
//     const autoLogResult : IAutoLogResult = {
//         succeed: false,
//         message: "tout fonctionne a merveille",
//         date: new Date(Date.now()).toDateString()
//     }
//     return autoLogResult
// }