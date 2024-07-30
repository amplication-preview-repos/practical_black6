import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "status";

export const NotificationTitle = (record: TNotification): string => {
  return record.status?.toString() || String(record.id);
};
