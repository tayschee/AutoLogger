export default interface IAccount {
    id: number,
    game: string,
    usernameOrEmail: string,
    password: string,
    succeed?: boolean,
    message?: string,
    date?: string
  }