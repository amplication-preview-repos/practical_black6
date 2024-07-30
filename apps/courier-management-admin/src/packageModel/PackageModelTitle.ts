import { PackageModel as TPackageModel } from "../api/packageModel/PackageModel";

export const PACKAGEMODEL_TITLE_FIELD = "status";

export const PackageModelTitle = (record: TPackageModel): string => {
  return record.status?.toString() || String(record.id);
};
