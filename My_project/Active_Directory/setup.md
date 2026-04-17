# Cybersecurity Portfolio Case Study - Enterprise AD + Splunk + Mailpit Lab (Detailed)

# Table of Contents
1. VM Setup
2. Windows Server 2025 Installation
3. Create Domain Controller and Promote Server
4. Create Users in Active Directory
5. Configure Windows 11 Client
6. Join Windows 11 to Domain
7. Install Ubuntu Server
8. Install Splunk Enterprise
9. Configure Universal Forwarder
10. Validate Logs in Splunk
11. Install Mailpit
12. Simulate Email Workflow
13. Skills Learned
14. Business Value

---

# 1. VM Setup

## Objective
Create an isolated enterprise lab using virtualization.

## Virtual Machines Used
- Windows Server 2025
- Windows 11 Client
- Ubuntu Server

## Why VMware
VMware allows multiple systems to run on one physical machine while maintaining network communication.

## Recommended Resources
- Windows Server: 4 GB+ RAM
- Windows 11: 4 GB+ RAM
- Ubuntu: 4 GB+ RAM
- Shared NAT Network

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416174435.png" alt="VM Setup 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416174457.png" alt="VM Setup 2" />

---

# 2. Windows Server 2025 Installation

## Objective
Deploy the core server that will become the Domain Controller.

## Process
1. Create new VM.
2. Attach Windows Server ISO.
3. Complete installation.
4. Configure administrator password.
5. Confirm network connectivity.

## Why This Matters
The server will host identity services for the environment.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416174723.png" alt="Windows Server Installation 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416175327.png" alt="Windows Server Installation 2" />

---

# 3. Create Domain Controller and Promote Server

## Objective
Install Active Directory Domain Services and promote the server into a Domain Controller.

## What is Promotion?
Promotion converts a standard Windows Server into a Domain Controller that stores the Active Directory database and handles authentication.

## Process
1. Open Server Manager.
2. Add Roles and Features.
3. Select Active Directory Domain Services.
4. Install role.
5. Click Promote this server to a domain controller.
6. Create new forest / domain.
7. Configure DSRM password.
8. Reboot server.

## Services Enabled
- Active Directory Domain Services
- DNS Server
- Kerberos Authentication
- LDAP Directory Services

## Why It Matters
Without a Domain Controller, centralized login and policy management are not possible.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416180218.png" alt="Promote Server 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416180250.png" alt="Promote Server 2" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416180349.png" alt="Promote Server 3" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416180432.png" alt="Promote Server 4" />

---

# 4. Create Users in Active Directory

## Objective
Create domain identities for login testing.

## Process
1. Open Active Directory Users and Computers.
2. Select Users OU or custom OU.
3. Right click -> New -> User.
4. Enter username and password.
5. Save account.

## Why This Matters
Users must exist in AD before they can authenticate to domain-joined systems.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416191330.png" alt="Create User 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416191358.png" alt="Create User 2" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260416191502.png" alt="Create User 3" />

---

# 5. Configure Windows 11 Client

## Objective
Prepare the workstation to become a managed domain endpoint.

## Required Configuration
- Same VMware network as server
- Correct IP connectivity
- DNS points to Domain Controller IP
- Windows Pro edition for domain join

## Why DNS Matters
The client uses DNS to locate the Domain Controller and authentication services.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417220909.png" alt="Windows 11 Config 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417220928.png" alt="Windows 11 Config 2" />

---

# 6. Join Windows 11 to Domain

## Objective
Establish trust between the workstation and the domain.

## Process
1. Open System Properties.
2. Select Change settings.
3. Choose Domain.
4. Enter domain name.
5. Provide domain admin credentials.
6. Restart workstation.

## Result
The workstation receives a computer account in Active Directory and domain users can log in.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417221314.png" alt="Join Domain 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417223552.png" alt="Join Domain 2" />

---

# 7. Install Ubuntu Server

## Objective
Deploy Linux server for Splunk and Mailpit.

## Why Ubuntu Server
- Lightweight
- Stable
- Strong package ecosystem
- Ideal for SIEM labs

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417223812.png" alt="Ubuntu Install 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417223940.png" alt="Ubuntu Install 2" />

---

# 8. Install Splunk Enterprise

## Objective
Deploy centralized logging platform.

## Process
1. Download Splunk package.
2. Install package.
3. Accept license.
4. Create admin account.
5. Start Splunk service.
6. Access web UI on port 8000.

## Why Splunk Matters
Splunk turns raw logs into searchable security intelligence.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417224006.png" alt="Splunk Install 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417224053.png" alt="Splunk Install 2" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417224329.png" alt="Splunk Install 3" />

---

# 9. Configure Universal Forwarder

## Objective
Send Windows logs to Splunk.

## Process
1. Install Splunk Universal Forwarder on Windows Server.
2. Set Splunk server IP.
3. Use receiving port 9997.
4. Enable Security/System/Application logs.

## Why This Matters
Critical authentication events become visible in the SIEM.

## Evidence
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417225107.png" alt="Universal Forwarder 1" />
<img src="https://raw.githubusercontent.com/anilbudthapa1/My_Portfolio/main/My_project/Active_Directory/evidence/Pasted%20image%2020260417230447.png" alt="Universal Forwarder 2" />

---

# 10. Validate Logs in Splunk

## Objective
Confirm ingestion and search capability.

## Example Searches
```spl
index=* host=*
index=* EventCode=4624
index=* EventCode=4625
