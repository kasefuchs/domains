import "@domains/polyfill";

import { domainTree, recordToDomainModifier, RecordType } from "@domains/zones";

const dns = NewDnsProvider("dns");
const registrar = NewRegistrar("none");

for (const [domain, mapping] of Object.entries(domainTree)) {
  D(domain, registrar, DnsProvider(dns), IGNORE_EXTERNAL_DNS());

  for (const [name, zone] of Object.entries(mapping)) {
    for (const recordType of Object.values(RecordType)) {
      const records = zone.records[recordType];
      if (records?.length) {
        D_EXTEND(
          name === "@" ? domain : `${name}.${domain}`,
          records.map((record) => recordToDomainModifier(recordType, record)),
        );
      }
    }
  }
}
