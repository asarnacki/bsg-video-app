export default interface AuthorizationToken {
  Token: string;
  TokenExpires: string;
}

interface IUser {
  ClientRoles: [];
  FullName: string;
  Id: number;
  UserName: string;
}
