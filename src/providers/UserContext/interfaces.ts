import { AxiosRequestConfig } from "axios";

export interface User {
  readonly id: number;
  name: string;
  email: string;
  password: string;
}

export type UserCreateForm = Omit<User, "id">;

export type UserLoginForm = Pick<User, "email" | "password">;

export type UserProviderValues = {
  loading: boolean;
  token: string;
  authHeader: AxiosRequestConfig;

  userLogin: (payload: UserLoginForm) => Promise<void>;
  userRegister: (payload: UserCreateForm) => Promise<void>;
  userLogout: () => void;
};
