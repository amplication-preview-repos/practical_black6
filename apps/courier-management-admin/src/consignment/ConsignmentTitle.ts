import { Consignment as TConsignment } from "../api/consignment/Consignment";

export const CONSIGNMENT_TITLE_FIELD = "latitude";

export const ConsignmentTitle = (record: TConsignment): string => {
  return record.latitude?.toString() || String(record.id);
};
