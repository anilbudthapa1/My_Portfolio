

# DNS for Active Directory

## Objective
Understand why DNS is critical for AD.

---

## Why DNS Matters
AD clients use DNS to:
- Find Domain Controllers
- Login
- Locate services

Without DNS, AD breaks.

---

## DNS Zones

## Forward Lookup Zone
Maps names to IPs.

Example:
dc01.corp.local -> 192.168.1.10

---

## Reverse Lookup Zone
Maps IPs to names.

---

## Common Records

## A Record
Hostname to IP

## CNAME
Alias record

## PTR
Reverse record

## SRV
Service location records used by AD

---

## Tasks

## Create Forward Zone
corp.local

## Create Reverse Zone
For your subnet

## Add Host Record
fileserver -> 192.168.1.20

---

## Commands

```powershell
nslookup
ipconfig /flushdns
ping dc01
