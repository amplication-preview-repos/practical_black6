export type Delivery = {
  consignmentId: number | null;
  createdAt: Date;
  deliveryDate: Date | null;
  id: string;
  packageId: number | null;
  pickupDate: Date | null;
  status: string | null;
  updatedAt: Date;
};
