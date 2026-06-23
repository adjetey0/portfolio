# Security Policy

## Supported Versions

The following versions of FORG are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

---

## Security Considerations

FORG is a local CLI tool that runs entirely on your machine. It does not make network requests, send data to external servers, or require internet access. However, the following areas are worth being aware of:

- **Index file** — `%USERPROFILE%\.forg\index.json` contains a snapshot of your file names and paths. It does not store file contents.
- **Script execution** — FORG requires PowerShell script execution to be enabled. It is recommended to use `RemoteSigned` or `Bypass` at the `CurrentUser` scope only, not system-wide.
- **Task Scheduler** — The `forg schedule` command registers a task that runs at every login. It only executes `forg index` and does not elevate privileges.
- **grep command** — `forg grep` reads file contents locally. It does not transmit or log any content.

---

## Reporting a Vulnerability

If you discover a security vulnerability in FORG, please report it responsibly.

**How to report:**
- Open a private issue on the GitHub repository, or
- Send a direct message to the maintainer via GitHub

**What to include:**
- A clear description of the vulnerability
- Steps to reproduce it
- The version of FORG you are using
- Your Windows and PowerShell version

**What to expect:**
- You will receive an acknowledgement within **48 hours**
- A status update will be provided within **7 days**
- If the vulnerability is confirmed, a fix will be prioritized and a new version released
- If the vulnerability is declined, a clear explanation will be provided

**Please do not** open a public issue for security vulnerabilities until a fix has been released.
