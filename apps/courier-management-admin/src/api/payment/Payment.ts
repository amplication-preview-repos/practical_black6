export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  jobId: number | null;
  paymentMethod: string | null;
  status: string | null;
  transactionId: string | null;
  updatedAt: Date;
  userId: number | null;
};
