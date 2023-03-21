import { IUser } from "../user.types";

export type LoginQueryData = {
  accessToken: string;
  expiredAt: number;
  user: IUser;
}