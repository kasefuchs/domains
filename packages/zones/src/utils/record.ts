import {
  type AAAARecord,
  type ARecord,
  type CNAMERecord,
  type DSRecord,
  type HTTPSRecord,
  type MXRecord,
  type NSRecord,
  type PTRRecord,
  RecordType,
  type RecordMap,
  type SRVRecord,
  type TXTRecord,
  type RecordFactories,
} from "@/types";

const recordFactories: RecordFactories = {
  [RecordType.A]: (r: ARecord, name, modifiers) =>
    A(name, r.address, modifiers),
  [RecordType.AAAA]: (r: AAAARecord, name, modifiers) =>
    AAAA(name, r.address, modifiers),
  [RecordType.MX]: ({ priority, target }: MXRecord, name, modifiers) =>
    MX(name, priority, target, modifiers),
  [RecordType.CNAME]: ({ target }: CNAMERecord, name, modifiers) =>
    CNAME(name, target, modifiers),
  [RecordType.TXT]: ({ content }: TXTRecord, name, modifiers) =>
    TXT(name, content, modifiers),
  [RecordType.HTTPS]: (
    { priority, target, parameters }: HTTPSRecord,
    name,
    modifiers,
  ) => HTTPS(name, priority, target, parameters ?? "", modifiers),
  [RecordType.PTR]: ({ target }: PTRRecord, name, modifiers) =>
    PTR(name, target, modifiers),
  [RecordType.SRV]: (
    { priority, weight, port, target }: SRVRecord,
    name,
    modifiers,
  ) => SRV(name, priority, weight, port, target, modifiers),
  [RecordType.NS]: ({ target }: NSRecord, name, modifiers) =>
    NS(name, target, modifiers),
  [RecordType.DS]: (
    { keyTag, algorithm, digestType, digest }: DSRecord,
    name,
    modifiers,
  ) => DS(name, keyTag, algorithm, digestType, digest, modifiers)
};

export function recordToDomainModifier<T extends keyof RecordMap>(
  type: T,
  record: RecordMap[T],
): DomainModifier {
  const name = record.name ?? "@";
  const ttl = TTL(record.ttl ?? 3600);

  return recordFactories[type](record, name, ttl);
}
