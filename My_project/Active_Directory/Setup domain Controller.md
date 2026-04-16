---
title: Setup domain Controller
date: 2026-04-05
status: draft
category: blog
description:
tags:
  - blog
publish: false
cover:
slug:
---

# Setup domain Controller

## Introduction

Active Directory (AD) is a centralized directory service provided by Windows Server that enables organizations to manage identities, resources, and security policies across a network. It acts as the backbone of enterprise IT infrastructure by storing information about users, computers, groups, and services in a structured database, and by authenticating and authorizing access using protocols such as Kerberos and LDAP. In modern environments, Active Directory ensures that administrators can enforce consistent security controls, streamline user management, and maintain operational efficiency. The Active Directory Administrative Center (ADAC) further enhances this capability by offering a modern interface integrated with PowerShell, enabling both graphical

## Main Content

Active Directory is built on a hierarchical and logical structure consisting of forests, domains, organizational units (OUs), and objects. A **forest** represents the highest level and acts as a security boundary, while a **domain** serves as a container for users, computers, and policies.

### **Promote to Domain Controller**
1. Look for “Flag with Warning” on the Active Directory Domain Services page.
2. Click on “Promote this server to a domain controller”.

Forest and domains are separate concepts in AD:

- **Forest**: A unit of network services, composed of domains that trust one another. For example, having labs.local as the forest name might mean your computers within these forests trust each other.
- **Domain**: A component of a forest. All users or computers must be part of at least one domain.

So when you promote a server to a domain controller, it joins that specific *domain*, not necessarily the entire *forest*.

## Setup

### What We Are Building (Quick Context)

You are setting up:
- 1 × Windows Server (DC01) → runs AD DS + DNS
- 1 × Windows 10/11 (CLIENT01) → joins the domain
- Domain Name → lab.local
This simulates a real enterprise identity infrastructure using Windows Server.

### Lab Requirements
Machines
- 1 × Windows Server (DC01)
- 1 × Windows 10/11 (CLIENT01)
Network
- Same VM network (NAT or Host-only)

*** Open Service Manager 
- Step 1 
** click on manage > add roles and features
![[Pasted image 20260405193751.png]]

- Step 2
** click on next > select Role-based or feature-base installation then next.
![[Pasted image 20260405194122.png]]


- Step 3 
** Select your Server name mine is DC01 if you didnot create, Create one it is just your pc name. Then next
![[Pasted image 20260405194338.png]]
- Step 4 
** Select Active Directory Domain Services and DNS Server then click on add features.
![[Pasted image 20260405194525.png]]

## Promote to Domain Controller
- Step 1
Look for “Flag with Warning” on the Active Directory Domain Services page, click on “Promote this server to a domain controller”.
![[Pasted image 20260405213027.png]]

Step 2
Click on the **New Forest** option: Select your Forest Name and then proceed with the forest creation steps
A **Forest** is a unit of network services composed of domains that trust one another. For example, having labs.local as the forest name means all computers within this forest trust each other.
![[Pasted image 20260405214941.png]]

Step 3
	 -This is most important part of this whole setup always use latest window server like for now window server 2025 for security purpose, Then check DNS server and GC.
	 - Why this matter?
		 -DNS - Required for AD
		 -GC - Enable fast authentication and search.
		 - leave uncheck rest
	- Set Good Strong password 
	- ![[Pasted image 20260405215434.png]]

Step 4 
- For now we donot need DNS Delegation as it is for main/sub dns for big org.

![[Pasted image 20260405215838.png]]

Step 5
- Donot Change NetBIOS Domain Name = LAB
This is the short name of your domain: ```lab.local```
NetBIOS name - LAB
Why NetBIOS Exists?, Before modern DNS, Windows used NetBIOS names for:Login , Network, discovery, Legacy systems. Even today, it’s still used in:
```LAB\Administrator``` 

![[Pasted image 20260405221745.png]]

Step 6: 
- Donot change anything next.
![[Pasted image 20260405224735.png]]

now install after pre-requests check , make sure your Administrator password is strong to pass this check and restart.
![[Pasted image 20260405231133.png]]