

# Group Policy

## Objective
Control users and computers centrally.

---

## What is GPO?
Group Policy Object allows administrators to enforce settings across many devices.

---

## Common Policies

## Password Policy
- Minimum length
- Complexity
- Lockout

## Security Policy
- Disable USB
- Firewall settings

## User Experience
- Wallpaper
- Hide Control Panel
- Login banner

---

## Tools
- Group Policy Management
- gpresult
- rsop.msc

---

## Concepts

## Linking
Attach GPO to domain or OU.

## Inheritance
Child OUs inherit parent GPOs.

## Precedence
Some policies override others.

---

## Commands

```powershell
gpupdate /force
gpresult /r
