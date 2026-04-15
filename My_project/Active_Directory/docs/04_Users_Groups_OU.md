

# Users Groups and OUs

## Objective
Manage identities properly in Active Directory.

---

## Create Organizational Units

Example:
- HR
- IT
- Finance
- Users
- Servers

---

## Create Users

Examples:
- jsmith
- abrown
- helpdesk1

Set:
- Password
- Must change password
- Enabled account

---

## Groups

## Security Groups
Used for permissions.

## Distribution Groups
Used for email lists.

---

## Best Practice: AGDLP

Accounts -> Global Groups -> Domain Local Groups -> Permissions

---

## Example

User:
John

Add to:
HR_Users

HR_Users added to:
HR_Share_RW

---

## Delegate Control
Allow helpdesk staff to:
- Reset passwords
- Unlock accounts

Without full admin rights.

---

## What I Learned
Good AD design uses OUs and groups, not manual permissions per user.
