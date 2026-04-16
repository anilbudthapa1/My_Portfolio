

# Setup Domain Controller

## Objective
Install Windows Server and create your first Active Directory domain.

---

## Lab Requirements
- Windows Server 2025 VM
- Static IP
- Internet optional

---

## Step 1: Rename Server
Set a meaningful hostname.

Example:
DC01

---

## Step 2: Set Static IP
Use a fixed IP address.

Example:
192.168.1.10

Why:
DNS and clients must always find the server.

---

## Step 3: Install AD DS Role

Open Server Manager:
Manage > Add Roles and Features

Install:
- Active Directory Domain Services

---

## Step 4: Promote to Domain Controller

After installation:
Promote this server to a domain controller

Choose:
Add a new forest

Domain name:
lab.local

---

## Step 5: Set DSRM Password
Used for recovery mode.

---

## Step 6: Restart Server
Server reboots after promotion.

---

## Step 7: Verify Domain
Login using:

corp\Administrator

---

## Checks
- AD Users and Computers opens
- DNS Manager works
- Domain created successfully

---

## Troubleshooting
- Wrong DNS settings
- Dynamic IP
- Time mismatch

---

## What I Learned
A Domain Controller is the core identity server in AD.
