Cybersecurity Portfolio Case Study - Enterprise AD + Splunk + Mailpit Lab (Detailed)

Table of Contents

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

1. VM Setup

Objective

Create an isolated enterprise lab using virtualization.

Virtual Machines Used

Windows Server 2025

Windows 11 Client

Ubuntu Server


Why VMware

VMware allows multiple systems to run on one physical machine while maintaining network communication.

Recommended Resources

Windows Server: 4 GB+ RAM

Windows 11: 4 GB+ RAM

Ubuntu: 4 GB+ RAM

Shared NAT Network


Evidence

![](Active_Directory/evidence/picture/Pasted image 20260416174435.png) ![](Active_Directory/evidence/picture/Pasted image 20260416174457.png)


---

2. Windows Server 2025 Installation

Objective

Deploy the core server that will become the Domain Controller.

Process

1. Create new VM.


2. Attach Windows Server ISO.


3. Complete installation.


4. Configure administrator password.


5. Confirm network connectivity.



Why This Matters

The server will host identity services for the environment.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260416174723.png) ![](Active_Directory/evidence/picture/Pasted image 20260416175327.png)


---

3. Create Domain Controller and Promote Server

Objective

Install Active Directory Domain Services and promote the server into a Domain Controller.

What is Promotion?

Promotion converts a standard Windows Server into a Domain Controller that stores the Active Directory database and handles authentication.

Process

1. Open Server Manager.


2. Add Roles and Features.


3. Select Active Directory Domain Services.


4. Install role.


5. Click Promote this server to a domain controller.


6. Create new forest / domain.


7. Configure DSRM password.


8. Reboot server.



Services Enabled

Active Directory Domain Services

DNS Server

Kerberos Authentication

LDAP Directory Services


Why It Matters

Without a Domain Controller, centralized login and policy management are not possible.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260416180218.png) ![](Active_Directory/evidence/picture/Pasted image 20260416180250.png) ![](Active_Directory/evidence/picture/Pasted image 20260416180349.png) ![](Active_Directory/evidence/picture/Pasted image 20260416180432.png)


---

4. Create Users in Active Directory

Objective

Create domain identities for login testing.

Process

1. Open Active Directory Users and Computers.


2. Select Users OU or custom OU.


3. Right click -> New -> User.


4. Enter username and password.


5. Save account.



Why This Matters

Users must exist in AD before they can authenticate to domain-joined systems.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260416191330.png) ![](Active_Directory/evidence/picture/Pasted image 20260416191358.png) ![](Active_Directory/evidence/picture/Pasted image 20260416191502.png)


---

5. Configure Windows 11 Client

Objective

Prepare the workstation to become a managed domain endpoint.

Required Configuration

Same VMware network as server

Correct IP connectivity

DNS points to Domain Controller IP

Windows Pro edition for domain join


Why DNS Matters

The client uses DNS to locate the Domain Controller and authentication services.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417220909.png) ![](Active_Directory/evidence/picture/Pasted image 20260417220928.png)


---

6. Join Windows 11 to Domain

Objective

Establish trust between the workstation and the domain.

Process

1. Open System Properties.


2. Select Change settings.


3. Choose Domain.


4. Enter domain name.


5. Provide domain admin credentials.


6. Restart workstation.



Result

The workstation receives a computer account in Active Directory and domain users can log in.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417221314.png) ![](Active_Directory/evidence/picture/Pasted image 20260417223552.png)


---

7. Install Ubuntu Server

Objective

Deploy Linux server for Splunk and Mailpit.

Why Ubuntu Server

Lightweight

Stable

Strong package ecosystem

Ideal for SIEM labs


Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417223812.png) ![](Active_Directory/evidence/picture/Pasted image 20260417223940.png)


---

8. Install Splunk Enterprise

Objective

Deploy centralized logging platform.

Process

1. Download Splunk package.


2. Install package.


3. Accept license.


4. Create admin account.


5. Start Splunk service.


6. Access web UI on port 8000.



Why Splunk Matters

Splunk turns raw logs into searchable security intelligence.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417224006.png) ![](Active_Directory/evidence/picture/Pasted image 20260417224053.png) ![](Active_Directory/evidence/picture/Pasted image 20260417224329.png)


---

9. Configure Universal Forwarder

Objective

Send Windows logs to Splunk.

Process

1. Install Splunk Universal Forwarder on Windows Server.


2. Set Splunk server IP.


3. Use receiving port 9997.


4. Enable Security/System/Application logs.



Why This Matters

Critical authentication events become visible in the SIEM.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417225107.png) ![](Active_Directory/evidence/picture/Pasted image 20260417230447.png)


---

10. Validate Logs in Splunk

Objective

Confirm ingestion and search capability.

Example Searches

index=* host=*
index=* EventCode=4624
index=* EventCode=4625

Important Event IDs

4624 Successful login

4625 Failed login

4720 User created

4740 Account lockout


Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417230809.png) ![](Active_Directory/evidence/picture/Pasted image 20260417230825.png)


---

11. Install Mailpit

Objective

Create free internal email simulation environment.

Features

SMTP server (1025)

Web inbox (8025)

Safe phishing testing


Why It Matters

Allows awareness testing and mail workflow investigation without paying for public email services.

Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417231534.png) ![](Active_Directory/evidence/picture/Pasted image 20260417231553.png) ![](Active_Directory/evidence/picture/Pasted image 20260417231825.png)


---

12. Simulate Email Workflow

Flow

Sender -> Mailpit -> User Inbox -> Investigation

Use Cases

Send test mail

Simulate phishing

Review headers

Investigate user actions


Evidence

![](Active_Directory/evidence/picture/Pasted image 20260417233020.png)


---

13. Skills Learned

Active Directory Administration

Domain Join & Authentication

DNS Troubleshooting

Windows Event Logging

Splunk SIEM Operations

Detection Engineering Basics

Linux Administration

Email Security Simulation

Documentation



---

14. Business Value

This project demonstrates the ability to build and secure an enterprise environment from scratch using practical tools. It is directly relevant to roles such as:

SOC Analyst

Security Analyst

IAM Analyst

Blue Team Engineer

Systems Administrator
