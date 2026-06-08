---
type: execution-task
created: 2026-06-08
source: slack
status: pending
priority: high
owner: Adrian / Sefa
---

## Task

Fix GitHub push access so that Visual Studio Code can push commits to the repository without receiving a 403 error.

## Why

Commits are being made locally but cannot be pushed to GitHub. GitHub is rejecting the push with a 403 Write access error, blocking all outgoing code changes from VS Code.

## Acceptance

- [ ] `git push` from VS Code succeeds without a 403 error
- [ ] The correct GitHub account (with repo write access) is authenticated via the configured remote
- [ ] Future pushes from VS Code work consistently without re-authentication

## Notes

Powód zgłoszonego błędu (skopiowane oryginalnie):

> **Powód:**
> - zdalny serwer zwrócił błąd `403`
> - komunikat: `Write access to repository not granted`
>
> To znaczy, że:
> - Twój aktualny remote/credential nie mają uprawnień do zapisu do tego repo
> - albo używasz HTTPS z nieprawidłowym tokenem/logowaniem
> - albo konto GitHub, z którego próbujesz wysłać, nie ma dostępu do repozytorium
>
> W skrócie: zmiany zostały skomitowane lokalnie, ale nie mogę ich wypchnąć, bo GitHub odrzuca dostęp do repozytorium.

**Likely causes to check:**
1. Stored HTTPS credential / PAT is expired or belongs to a different GitHub account — clear OS credential manager and re-authenticate
2. The GitHub account currently authenticated does not have write access to the repo — verify repo collaborators/team permissions
3. Remote URL may point to wrong org/repo — run `git remote -v` to confirm
