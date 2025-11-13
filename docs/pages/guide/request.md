---
icon: lucide/file-plus
title: Requesting a Subdomain
---

# :lucide-file-plus: Requesting a Subdomain

1. First, fork the [kasefuchs/domains](https://github.com/kasefuchs/domains/fork) repository.
2. Create a new file in the directory `packages/zones/data/floof.fans` named `<your-subdomain>.yaml`.
3. Add the base content to the newly created file:

```yaml
---
owners:
  - <your-github-username>

records: {}
```

The owners field is a list of GitHub usernames that manage the subdomain. Include at least one, usually your GitHub username.

You can optionally include **NS records** if you want to delegate your subdomain to another DNS provider:

```yaml
---
owners:
  - <your-github-username>

records:
  NS:
    - target: ns1.example.com.
    - target: ns2.example.com.
```

4. If you use NS records, choose your desired targets in the [delegation section](/delegation/) and update your subdomain file accordingly.
5. See the full list of supported record types and examples on the [records page](records/).
6. Create a [pull request](https://github.com/kasefuchs/domains/pulls) to the main branch.
