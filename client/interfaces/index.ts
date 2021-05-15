export interface CurrentUserJwt {
  id: string;
  email: string;
  iat: number;
}

export interface CurrentUser {
  currentUser: CurrentUserJwt;
}
