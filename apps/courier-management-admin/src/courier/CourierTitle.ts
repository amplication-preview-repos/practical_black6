import { Courier as TCourier } from "../api/courier/Courier";

export const COURIER_TITLE_FIELD = "status";

export const CourierTitle = (record: TCourier): string => {
  return record.status?.toString() || String(record.id);
};
