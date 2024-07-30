import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "currentLocation";

export const JobTitle = (record: TJob): string => {
  return record.currentLocation?.toString() || String(record.id);
};
