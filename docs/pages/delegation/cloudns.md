---
icon: lucide/cloud
title: Delegating via ClouDNS
---

# :lucide-cloud: Delegating via ClouDNS

[ClouDNS](https://www.cloudns.net/) is one of the [fastest](https://www.dnsperf.com/#!dns-providers) authoritative DNS providers. The free plan does not include DNSSEC.

1. If you don't have an account - [sign up](https://www.cloudns.net/).
2. After signing in to your account, click **"Available name servers"** and copy them into your subdomain file. Example:

```yaml
---
records:
  NS:
    - target: ns71.cloudns.net.
    - target: ns72.cloudns.com.
    - target: ns73.cloudns.net.
    - target: ns74.cloudns.uk.
```

3. Then click **"Create zone"** and select **"Master zone"**.
4. Choose **"Create with NS records"**, enter `<your-subdomain>.floof.fans` in the **"Domain name"** field, and click **"Create"**.
