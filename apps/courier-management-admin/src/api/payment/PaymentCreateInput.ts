export type PaymentCreateInput = {
  amount?: number | null;
  jobId?: number | null;
  paymentMethod?: string | null;
  status?: string | null;
  transactionId?: string | null;
  userId?: number | null;
};
