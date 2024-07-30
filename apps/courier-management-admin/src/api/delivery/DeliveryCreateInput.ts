export type DeliveryCreateInput = {
  consignmentId?: number | null;
  deliveryDate?: Date | null;
  packageId?: number | null;
  pickupDate?: Date | null;
  status?: string | null;
};
