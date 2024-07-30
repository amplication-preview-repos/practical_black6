import { TrackingInformation as TTrackingInformation } from "../api/trackingInformation/TrackingInformation";

export const TRACKINGINFORMATION_TITLE_FIELD = "latitude";

export const TrackingInformationTitle = (
  record: TTrackingInformation
): string => {
  return record.latitude?.toString() || String(record.id);
};
