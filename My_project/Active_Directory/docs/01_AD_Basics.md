
# Active Directory Basics

## Objective
Understand core Active Directory concepts used in enterprise networks.

---

## What is Active Directory?

Active Directory (AD) is Microsoft's centralized identity and access management system used to manage users, computers, groups, and security policies inside an organization.

It allows administrators to:
- Create users
- Manage passwords
- Join computers to a domain
- Apply policies
- Control access to resources

---

## Key Components

### Domain
A logical group of users, computers, and resources sharing the same database.
> Example: `corp.local`

### Forest
The top-level container of one or more domains.

### Tree
A hierarchy of domains connected in a forest.

### Organizational Unit (OU)
A container used to organize users, groups, and computers.

> Example:
> - HR
> - IT
> - Finance

### Objects
Anything stored in AD:
- User
- Computer
- Group
- Printer

### Domain Controller (DC)
A server running AD services that authenticates users and stores directory data.

---

## Authentication Protocols

| Protocol | Description |
|----------|-------------|
| **Kerberos** | Primary authentication method in AD |
| **NTLM** | Older authentication method |
| **LDAP** | Used for directory queries and management |

---

## Why Companies Use AD

- Centralized management
- Better security
- Group policies
- User lifecycle management
- Access control
- 
