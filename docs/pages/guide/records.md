---
icon: lucide/settings
title: Creating DNS Records
---

# :lucide-settings: Creating DNS Records

## Optional Parameters:

### Name

Subdomain name.
Default value: `@` (root)

```yaml
records:
  A:
    - name: example
      address: 172.59.252.100
```

### TTL

[Time to live](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/).
Default value: `3600`

```yaml
records:
  A:
    - ttl: 7200
      address: 172.59.252.100
```

## Records:

### A Record

```yaml
records:
  A:
    - address: 172.59.252.100
```

### AAAA Record

```yaml
records:
  AAAA:
    - address: 4c6d:b6db:4af5:b144:2f63:12a1:a11a:ad2e
```

### CNAME Record

```yaml
records:
  CNAME:
    - target: example.com.
```

### DS Record

```yaml
records:
  DS:
    - keyTag: 1234
      algorithm: 12
      digestType: 1
      digest: 36b23bba170d6271fb8640d837d394a2
```

### HTTPS Record

```yaml
records:
  HTTPS:
    - priority: 1
      target: 4c6d:b6db:4af5:b144:2f63:12a1:a11a:ad2e
      parameters: param=1 # optional
```

### MX Record

```yaml
records:
  MX:
    - priority: 10
      target: mx1.example.com.
    - priority: 20
      target: mx2.example.com.
```

### NS Record

```yaml
records:
  NS:
    - target: ns1.example.com.
```

### PTR Record

```yaml
records:
  PTR:
    - target: example.com.
```

### SRV Record

```yaml
records:
  SRV:
    - priority: 0
      weight: 5
      port: 8080
      target: example.com.
```

### TXT Record

```yaml
records:
  TXT:
    - content: text
```
