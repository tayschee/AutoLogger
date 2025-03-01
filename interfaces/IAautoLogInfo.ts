export default interface IAutoLogInfo {
    id: Number,
    game: String,
    usernameOrEmail: String,
    password: String,
    succeed: boolean | undefined,
    message: String,
    date: String
  }