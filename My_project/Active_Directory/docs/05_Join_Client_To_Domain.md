

# Join Client to Domain

## Objective
Connect Windows client computers to Active Directory.

---

## Requirements
- Windows 10 or 11 VM
- Network access to DC
- DNS set to Domain Controller IP

---

## Steps

## Step 1
Set DNS manually to:

192.168.1.10

---

## Step 2
Open:

System > About > Rename this PC (Advanced)

---

## Step 3
Click Change

Select:
Domain

Enter:
corp.local

---

## Step 4
Provide credentials:

corp\Administrator

---

## Step 5
Restart PC

---

## Step 6
Login as domain user

Example:
corp\jsmith

---

## Verify in AD
Computer object appears in:
Computers OU

---

## Troubleshooting
- Wrong DNS
- Cannot resolve domain
- Time sync issues

---

## What I Learned
Clients must use AD DNS to join and authenticate.
