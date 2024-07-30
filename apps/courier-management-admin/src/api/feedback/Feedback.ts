export type Feedback = {
  comments: string | null;
  createdAt: Date;
  id: string;
  packageId: number | null;
  rating: number | null;
  updatedAt: Date;
  userId: number | null;
};
