export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
  userId: number | null;
};
