export enum RecordType {
  A = "A",
  AAAA = "AAAA",
  MX = "MX",
  CNAME = "CNAME",
  TXT = "TXT",
  HTTPS = "HTTPS",
  PTR = "PTR",
  SRV = "SRV",
  NS = "NS",
  DS = "DS",
  ALIAS = "ALIAS",
}

export interface BaseRecord {
  name?: string;
  ttl?: number;
}

export interface ARecord extends BaseRecord {
  address: string;
}

export interface AAAARecord extends BaseRecord {
  address: string;
}

export interface MXRecord extends BaseRecord {
  priority: number;
  target: string;
}

export interface CNAMERecord extends BaseRecord {
  target: string;
}

export interface TXTRecord extends BaseRecord {
  content: string;
}

export interface HTTPSRecord extends BaseRecord {
  priority: number;
  target: string;
  parameters?: string;
}

export interface PTRRecord extends BaseRecord {
  target: string;
}

export interface SRVRecord extends BaseRecord {
  priority: number;
  weight: number;
  port: number;
  target: string;
}

export interface NSRecord extends BaseRecord {
  target: string;
}

export interface DSRecord extends BaseRecord {
  keyTag: number;
  algorithm: number;
  digestType: number;
  digest: string;
}

export interface RecordMap {
  [RecordType.A]: ARecord;
  [RecordType.AAAA]: AAAARecord;
  [RecordType.MX]: MXRecord;
  [RecordType.CNAME]: CNAMERecord;
  [RecordType.TXT]: TXTRecord;
  [RecordType.HTTPS]: HTTPSRecord;
  [RecordType.PTR]: PTRRecord;
  [RecordType.SRV]: SRVRecord;
  [RecordType.NS]: NSRecord;
  [RecordType.DS]: DSRecord;
}

export type RecordFactory<T extends BaseRecord> = (
  record: T,
  name: string,
  ...modifiers: RecordModifier[]
) => DomainModifier;

export type RecordFactories = {
  [K in keyof RecordMap]: RecordFactory<RecordMap[K]>;
};
