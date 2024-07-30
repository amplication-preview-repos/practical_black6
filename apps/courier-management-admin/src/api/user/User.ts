import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: number | null;
  role: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
