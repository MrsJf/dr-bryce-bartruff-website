# Deployment Checklist

## Before Every Deployment

**ALWAYS run these checks before pushing changes:**

### 1. Test Build Locally
```bash
# Run this command to test the build
npm run build
```
OR use the batch file:
```bash
test-build.bat
```

### 2. Check for Problematic Files
- ❌ NO backup files (`*.backup`, `*_backup.*`, `*_clean.*`)
- ❌ NO temporary files (`*.tmp`, `*.temp`)
- ❌ NO test files left in src/ directory
- ✅ Only production-ready files

### 3. Verify Git Status
```bash
git status
git log --oneline -3
```

### 4. Clean Commit Message
Always use descriptive commit messages that explain what changed.

## Common Issues to Avoid

### JSX Syntax Errors
- Always wrap arrays in JSX with `{[...].map(...)}`
- Check for unclosed JSX tags
- Verify proper quote matching

### Backup File Issues
- Never commit files ending in `.backup`, `_backup`, `_clean`, etc.
- Remove any temporary or backup files before committing
- Use `.gitignore` to prevent accidental commits

### Build Process
- If Vercel shows old commit, check if latest changes were pushed
- If build fails on Vercel but works locally, check for missing files or syntax errors
- Always test locally before deploying

## Emergency Fix Process

If deployment fails:

1. Check Vercel build logs for specific error
2. Run `npm run build` locally to reproduce error
3. Fix the error
4. Test build again locally (`npm run build` must succeed)
5. Commit and push fix
6. Monitor Vercel deployment

## File Management Best Practices

- Keep only necessary files in src/ directories
- Use descriptive file names (avoid generic names like `page_old.tsx`)
- Clean up unused imports and variables
- Test every change locally before committing