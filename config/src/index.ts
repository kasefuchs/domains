import { domainTree, recordToDomainModifier, RecordType } from "@domains/zones";

const REG_NONE = NewRegistrar("none");
const DNS_BIND = NewDnsProvider("bind");

Object.keys(domainTree).forEach((domain) => {
  const mapping = domainTree[domain]!;

  D(domain, REG_NONE, DnsProvider(DNS_BIND));

  Object.keys(mapping).forEach((name) => {
    const zone = mapping[name]!;

    Object.values(RecordType).forEach((recordType) => {
      const records = zone.records[recordType];
      if (!records || !records.length) return;

      const modifiers = records.map((record) => recordToDomainModifier(recordType, record));
      if (modifiers.length) {
        D_EXTEND(name === "@" ? domain : `${name}.${domain}`, modifiers);
      }
    });
  });
});
