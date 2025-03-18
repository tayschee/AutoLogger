import AmourSucreNewGenAutoLog from "@/utils/games/amourSucreNewGen/amourSucreNewGen.ts"

interface IGameInfo {
    function: Function;
    variable: any
}
export const mapAutoLog: Map<String, Function> = new Map<String, Function>([
    ["AmourSucreNewGen", AmourSucreNewGenAutoLog]
])