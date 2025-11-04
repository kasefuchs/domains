import type { RecordMap } from "@/types/record.ts";

export type ZoneRecords = {
  [K in keyof RecordMap]?: RecordMap[K][];
};

export interface Zone {
  records: ZoneRecords;
}

export interface DomainTree {
  [domain: string]: Record<string, Zone>;
}
