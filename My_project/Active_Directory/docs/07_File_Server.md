

# File Server and Permissions

## Objective
Build shared folders with secure access.

---

## Create Shared Folder

Example:
D:\Shares\HR

---

## Permissions

## Share Permissions
Network access permissions.

## NTFS Permissions
Local file system permissions.

Both combine together.

---

## Example Access
HR group:
Read / Write

Others:
No access

---

## Map Network Drive

```powershell
net use Z: \\fileserver\HR
