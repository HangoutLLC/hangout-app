# 📘 GitHub Best Practices

This document outlines the **best practices** for using Git and GitHub in a professional software development environment.

---

## 📁 1. Repository Structure

- **Use a clear folder structure**: Keep source code, configuration, documentation, and tests in separate, well-named directories.
- **.gitignore**: Use `.gitignore` to avoid committing generated files, secrets, or dependencies.
- **Contributing Guidelines**: Add a `CONTRIBUTING.md` to explain how contributors can submit issues or pull requests.

---

## 🌿 2. Branching Strategy

- **Default Branch**: `main` should always be deployable and production-ready.
- **Feature Branches**: Create feature branches off of `main` for new features or bug fixes.
  - Naming convention: `feature/login-page`, `bugfix/user-auth-crash`, `chore/update-docs`.
- **Release Branches** (if using release cycles): `release/1.0.0`
- **Hotfix Branches**: For emergency production fixes: `hotfix/critical-bug`
- **Avoid committing directly to `main`**.

---

## 🔀 3. Pull Request (PR) Workflow

1. **Create a PR from your feature branch to `main`.**
2. **Write clear PR titles and descriptions.**
3. **Link to related issues** (e.g., `Fixes #123`).
4. **Keep PRs small and focused** on one task.
5. **Tag reviewers and request feedback**.
6. **Use draft PRs** to start a conversation early if needed.
7. **Do not merge until all checks pass and approvals are complete.**
8. **Prefer squash or rebase merges** to keep history clean.

---

## ✏️ 4. Structured Commit Messages

Use the [Conventional Commits](https://www.conventionalcommits.org/) standard:

### Format:
```
<type>(scope): short description
```

### Examples:
- `feat(auth): add JWT authentication`
- `fix(api): handle 500 error from payment gateway`
- `docs(readme): update getting started section`
- `chore(deps): upgrade lodash to 4.17.21`

### Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Formatting, missing semi colons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests
- `chore`: Maintenance

---

## 📌 5. Rebasing Instead of Merging (for Local History)

To keep a clean linear history:

```bash
# Sync your feature branch with latest main
git checkout feature/my-feature
git fetch origin
git rebase origin/main
```

- Resolve conflicts during rebase.
- After rebase, push with `--force-with-lease`:
  ```bash
  git push --force-with-lease
  ```

> 💡 Avoid force pushing to shared branches (`main`, `develop`).

---

## 🔄 6. Syncing Your Branch

Before opening a PR, always rebase against the latest `main` or `dev`:

```bash
git checkout feature/my-feature
git pull --rebase origin main
```

This prevents unnecessary merge commits and avoids future conflicts. Try to do this anytime you start a new feature and resolve conflicts beforehand.

---

## 📂 7. GitHub Issues and Projects

- **Use GitHub Issues** to track bugs, features, and enhancements.
- **Tag issues** using labels like `bug`, `enhancement`, `question`.
- **Use GitHub Projects** (or a board like ZenHub or Linear) to organize tasks.
- **Assign issues** and link them in PRs.

---

## ✅ 8. Code Reviews

- **Review for logic, readability, and style**.
- **Don’t just approve—ask questions if anything is unclear**.
- **Leave constructive feedback**.
- **Use GitHub suggestions to offer quick fixes**. (They not always good lowkey)

---

## 🧪 9. Testing Before Merge

- Always run tests locally or via CI/CD before merging. 
- (We can implement unit testing in the future but a good practice to keep in mind).
- Block PR merges if checks fail.

---

## 🔒 10. Secrets and Security

- Never commit secrets, API keys, or credentials. (For our case right now it's okay but lowkey try to avoid)
- Use tools like [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning) and [git-secrets](https://github.com/awslabs/git-secrets).
- Rotate keys immediately if secrets are accidentally pushed.

---

## ⚙️ 11. Automation & Tooling

- **GitHub Actions**: Automate tests, builds, and deployments.
- **Pre-commit Hooks**: Use tools like `prettier`, `eslint`, `black`, etc. with `pre-commit` to format/lint code before commits.
- **Semantic Release**: Automate versioning and changelogs based on commits.

---

## 🚨 12. Common Pitfalls to Avoid

- ❌ Working off outdated branches
- ❌ Committing generated files or secrets
- ❌ Large PRs with mixed concerns
- ❌ Merging without review or testing
- ❌ Using vague commit messages (e.g., `fix`, `update`)

---

## 📋 Summary Checklist

✅ Use feature branches  
✅ Follow conventional commits  
✅ Rebase instead of merge for local updates  
✅ Submit small, focused PRs  
✅ Review and test before merge  
✅ Never commit secrets  
✅ Automate testing and checks
