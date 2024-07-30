import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: number | null;
  role?: string | null;
  roles: InputJsonValue;
  username: string;
};
