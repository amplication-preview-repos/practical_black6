export type PackageModel = {
  createdAt: Date;
  customerId: number | null;
  id: string;
  packageDetail: string | null;
  receiverInfo: string | null;
  senderInfo: string | null;
  status: string | null;
  updatedAt: Date;
};
