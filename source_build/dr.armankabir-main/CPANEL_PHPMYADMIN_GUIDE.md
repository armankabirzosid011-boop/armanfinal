# cPanel & PhpMyAdmin Integration Guide

## Overview

This guide covers deploying Dr. Arman Kabir's Care application on cPanel hosting with PhpMyAdmin database access and complete cPanel compatibility.

## Prerequisites

- cPanel hosting account with:
  - ✓ Node.js support (v20.x or higher)
  - ✓ Apache with mod_rewrite enabled
  - ✓ SSH access
  - ✓ pnpm or npm for package management
- SSL/TLS certificate (AutoSSL recommended)

## Deployment Steps

### 1. SSH into cPanel Server

```bash
ssh your-username@yourdomain.com
# Or with IP: ssh your-username@your.server.ip
```

### 2. Clone Repository

```bash
cd ~
git clone https://github.com/armankabirzosid011-boop/drarman.git
cd drarman
```

### 3. Run Deployment Script

```bash
bash deploy.sh
```

The script will automatically:
- ✓ Verify Node.js v20+ and pnpm are installed
- ✓ Install dependencies
- ✓ Build the React frontend
- ✓ Deploy files to `public_html/`
- ✓ Copy `.htaccess` configuration for SPA routing
- ✓ Set correct file permissions (644 files, 755 directories)
- ✓ Create automatic backup of previous deployment
- ✓ Verify all critical files are deployed

### 4. Post-Deployment in cPanel

1. **Log into cPanel Dashboard**
   - URL: `https://yourdomain.com:2083` (default port)
   - Or: Access via hosting provider's control panel

2. **Verify SSL Certificate**
   - Go to: **SSL/TLS Status**
   - Click: **Manage SSL sites**
   - Select your domain and install **AutoSSL** (free, automated renewal)
   - Status should show: ✓ Active

3. **Enable Required Apache Modules** (if not enabled)
   - Go to: **Apache Handlers** (under Advanced)
   - Verify `mod_rewrite` is listed and enabled (required for SPA routing)
   - Verify `mod_deflate` is listed and enabled (GZIP compression)
   - Verify `mod_expires` is listed and enabled (browser caching)
   - Restart Apache: **Restart Services** → **Apache**

## PhpMyAdmin Access

### Method 1: Via cPanel GUI (Recommended - Secure)

1. Log into cPanel Dashboard
2. Scroll down → Find **Databases** section
3. Click **phpMyAdmin**
4. Opens in new tab with automatic authentication
5. Full database access (no login required when accessed this way)

**Advantages:**
- ✓ No database password needed
- ✓ Credentials automatically authenticated
- ✓ Restricted to cPanel account owner only

### Method 2: Direct URL Access

```
https://yourdomain.com/phpmyadmin
```

**Login credentials:**
- Username: `cpanel_username`
- Password: `cpanel_password` (your cPanel login)

### Method 3: Via SSH (Command Line Access)

```bash
# Connect to MySQL locally
mysql -u cpanel_username -p

# List all databases
SHOW DATABASES;

# Select database
USE database_name;

# Show all tables
SHOW TABLES;

# Exit MySQL
EXIT;
```

## Database Setup for Dr. Arman Care

If you need to set up databases for the application:

### Via PhpMyAdmin GUI

1. Open **phpMyAdmin** (cPanel → Databases → phpMyAdmin)
2. Click **New** (left sidebar)
3. Enter database name: `drarmankabir_care`
4. Collation: `utf8mb4_unicode_ci` (for Unicode support)
5. Click **Create**
6. Select the new database
7. Go to **Privileges** tab
8. Click **Add user**
   - Username: `drarmankabir_user`
   - Host: `localhost` (must be localhost for cPanel)
   - Password: (auto-generate secure password - copy it!)
   - Grant ALL privileges
   - Click **Go**

### Via SSH/Command Line

```bash
# Connect to MySQL
mysql -u cpanel_username -p

# Create database with UTF8 support
CREATE DATABASE drarmankabir_care CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Create user (localhost only for cPanel)
CREATE USER 'drarmankabir_user'@'localhost' IDENTIFIED BY 'secure_password_here';

# Grant all privileges on database
GRANT ALL PRIVILEGES ON drarmankabir_care.* TO 'drarmankabir_user'@'localhost';

# Apply changes
FLUSH PRIVILEGES;

# Verify (exit first)
EXIT;

# Login with new user
mysql -u drarmankabir_user -p drarmankabir_care
```

## Configuration Files

### .htaccess (React SPA Routing + PhpMyAdmin)

Located at: `public_html/.htaccess`

**Handles:**
- ✓ GZIP compression (mod_deflate) - reduces bandwidth by 60%+
- ✓ Browser caching (mod_expires) - speeds up repeat visits
- ✓ SPA routing (mod_rewrite) - all URLs point to index.html
- ✓ Security headers (X-Frame-Options, CSP, etc.)
- ✓ PhpMyAdmin bypass - allows /phpmyadmin to work

**Critical line (was broken):**
```apacheconf
ExpiresDefault "access plus 2 days"  # Correct
# NOT: Default "access plus 2 days" (this was the bug)
```

**If SPA routing breaks (404 on refresh):**

1. Verify `.htaccess` is in `public_html/` with correct syntax
2. Check in cPanel → **Apache Handlers** → `mod_rewrite` enabled
3. Restart Apache: cPanel → **Restart Services** → **Apache**
4. Test: `curl -I https://yourdomain.com/dashboard` should serve index.html (200 OK)

### env.json (Environment Configuration)

Located at: `public_html/env.json`

```json
{
  "apiBaseUrl": "https://yourdomain.com/api",
  "environment": "production",
  "version": "1.0.0"
}
```

Update this if your API endpoints change.

## Testing Deployment

### 1. Frontend SPA Routing

```bash
# Test direct routes work (no hash routing needed)
curl -I https://yourdomain.com/dashboard
curl -I https://yourdomain.com/patients/123
curl -I https://yourdomain.com/settings

# All should return 200 OK and serve index.html
```

### 2. Browser Testing

- Open: `https://yourdomain.com/`
- Should load the application homepage
- Click navigation links → should NOT show 404
- **Refresh page (Ctrl+F5)** → should still show app (tests SPA routing)
- Open developer console (F12) → check for errors

### 3. Performance Check

- Open DevTools → Network tab
- Check for:
  - ✓ CSS/JS files compressed (Content-Encoding: gzip)
  - ✓ Cache-Control headers present
  - ✓ No mixed HTTP/HTTPS warnings
  - ✓ Load time < 3 seconds

### 4. Database Connectivity (if backend needed)

```bash
# SSH into server
ssh your-user@yourdomain.com

# Test connection to database
mysql -u drarmankabir_user -p drarmankabir_care -e "SHOW TABLES;"

# Should connect without errors
```

### 5. PhpMyAdmin Access

- Via cPanel: Home → Databases → phpMyAdmin → should load
- Direct URL: `https://yourdomain.com/phpmyadmin` → should show login
- Command line: `mysql -u drarmankabir_user -p` → should connect

## Troubleshooting

### Issue: 404 on Page Refresh

**Symptom:** Homepage works, but `/dashboard` → 404

**Causes & Fixes:**
1. `.htaccess` has syntax error (line 30 should be `ExpiresDefault`, not `Default`)
   - Fixed in latest version ✓
2. `mod_rewrite` not enabled
   - cPanel: Home → Advanced → Apache Handlers
   - Look for: `mod_rewrite` in list
   - If missing, enable it
3. `.htaccess` not in public_html
   - Verify: `ls -la public_html/.htaccess`
   - If missing: `cp .htaccess public_html/`
4. Apache syntax error
   - Restart Apache: cPanel → **Restart Services** → **Apache**

**Test:**
```bash
curl -v https://yourdomain.com/phpmyadmin
# Should work (PhpMyAdmin loads)

curl -v https://yourdomain.com/admin/settings
# Should serve index.html with 200 OK (not 404)
```

### Issue: Slow Performance / Large Bundle

**Symptom:** Page loads slowly, large JS/CSS files, no compression

**Causes:**
- Unnecessary ICP dependencies (~500KB unused)
- Unoptimized images
- GZIP not enabled in .htaccess

**Fix:**
```bash
# 1. Check GZIP is enabled
curl -I https://yourdomain.com | grep -i gzip
# Should show: Content-Encoding: gzip

# 2. Remove ICP packages (optional)
cd src/frontend
pnpm remove @dfinity/agent @dfinity/auth-client @dfinity/candid \
  @dfinity/identity @dfinity/principal @icp-sdk/core
pnpm build
bash ../../deploy.sh

# 3. Optimize images
cd src/frontend/public/assets
find . -name "*.png" -exec pngquant 256 {} \;
find . -name "*.jpg" -exec jpegoptim -m 85 {} \;
pnpm build && bash ../../deploy.sh
```

### Issue: Permission Denied Errors

**Symptom:** "Permission denied" when accessing files in cPanel

**Fix:**
```bash
# SSH into server and fix permissions
cd public_html
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
chmod 644 .htaccess

# Verify
ls -la | head
# Should show: -rw-r--r-- (644) for files
# Should show: drwxr-xr-x (755) for directories
```

### Issue: PHP Not Working (if backend uses PHP)

**Note:** Current app is React frontend only. If you add PHP backend:

1. Save PHP files in appropriate directory (not in public_html root)
2. Configure PHP version in cPanel: **Software → Select PHP Version**
3. Test: `php -v` via SSH
4. Enable extensions if needed via cPanel

### Issue: Database Connection Fails

**Symptom:** Backend cannot connect to database

**Debug:**
```bash
# SSH and test connection
ssh your-user@yourdomain.com
mysql -u drarmankabir_user -p -e "SELECT 1;"

# If fails, check:
# 1. User created: mysql -u cpanel_username -p -e "SELECT user FROM mysql.user WHERE user='drarmankabir_user';"
# 2. User has privileges: mysql -u cpanel_username -p -e "SHOW GRANTS FOR 'drarmankabir_user'@'localhost';"
# 3. Database exists: mysql -u cpanel_username -p -e "SHOW DATABASES LIKE 'drarmankabir_care';"
```

### Issue: PhpMyAdmin Not Accessible

**Symptom:** `/phpmyadmin` returns 404 or 403

**Check:**
1. Is PhpMyAdmin installed?
   - cPanel: Home → Advanced → cPanel Addons
   - Or check: `ls -la ~/public_html/phpmyadmin`
2. Is `.htaccess` rewrite rule blocking it?
   - Latest `.htaccess` has: `RewriteCond %{REQUEST_URI} ^/phpmyadmin [NC]`
   - This should allow it through ✓
3. Via cPanel GUI should always work (direct link in Databases → phpMyAdmin)

## Updating Application

### Standard Update (Minor Changes)

```bash
cd ~/drarman
git pull origin main
bash deploy.sh
```

### Full Rebuild (Major Changes, Dependencies Updated)

```bash
cd ~/drarman
git pull origin main
pnpm install --no-frozen-lockfile
bash deploy.sh
```

### Rollback to Previous Version

The deployment script creates automatic backups:

```bash
# List backups
ls -la | grep "public_html.backup"

# Restore specific backup
rm -rf public_html
mv public_html.backup.1234567890 public_html

# Or restore from git
cd ~/drarman
git reset --hard HEAD~1  # Go back 1 commit
bash deploy.sh
```

## Security Checklist

Before going live:

- [ ] SSL certificate installed and active (green lock 🔒)
- [ ] `.htaccess` syntax correct (ExpiresDefault, not Default)
- [ ] File permissions set: 644 files, 755 directories
- [ ] No `node_modules` exposed in public_html
- [ ] `.env` and sensitive config NOT in git
- [ ] PhpMyAdmin access restricted (cPanel login only)
- [ ] Database user created with strong password
- [ ] Regular backups enabled (cPanel → Backup)
- [ ] Monitor error logs: cPanel → Error Log
- [ ] X-Frame-Options header set to SAMEORIGIN
- [ ] X-Content-Type-Options set to nosniff

## Performance Optimization

### 1. Enable HTTP/2

- cPanel → **EasyApache 4** (or **Apache Modules**)
- Enable: `mod_http2`
- Supported by most modern browsers
- 2-3x faster than HTTP/1.1

### 2. Database Optimization

Via PhpMyAdmin:

1. Select database → **Check all** → Choose **Optimize table**
2. Or via SSH:
   ```sql
   OPTIMIZE TABLE table_name;
   ANALYZE TABLE table_name;
   ```

### 3. Image Optimization

Reduce bundle size:

```bash
# Compress images before deployment
cd src/frontend/public/assets
find . -name "*.png" -exec pngquant 256 {} \;
find . -name "*.jpg" -exec jpegoptim -m 85 {} \;
```

### 4. Enable CDN for Static Assets (Optional)

Set up Cloudflare (free tier):

1. Create account at cloudflare.com
2. Add your domain
3. Update nameservers to Cloudflare's
4. Benefits: ✓ Global CDN, ✓ DDoS protection, ✓ 50+ countries

### 5. Monitor Performance

```bash
# Check load average
uptime

# Check memory usage
free -h

# Check disk usage
df -h ~/public_html

# Check MySQL tables
mysql -u cpanel_username -p -e "SELECT table_name, ROUND(((data_length + index_length) / 1024 / 1024), 2) AS size_mb FROM information_schema.tables WHERE table_schema = 'drarmankabir_care';"
```

## Support & Resources

### cPanel Help

- **cPanel Docs:** https://documentation.cpanel.net/
- **Error Logs:** cPanel → Home → **Error Log**
- **Support Ticket:** cPanel → **Support** or contact hosting provider

### React/Frontend Issues

- **React Router Docs:** https://reactrouter.com/
- **Vite Build Docs:** https://vitejs.dev/

### Database Issues

- **MySQL Docs:** https://dev.mysql.com/doc/
- **PhpMyAdmin Help:** https://www.phpmyadmin.net/

### Healthcare Data Compliance

If storing patient data:
- **HIPAA** (US): Patient data encryption, access logs, backup plans
- **GDPR** (EU): Data privacy policies, user consent, data portability
- **Consult:** Your hosting provider's compliance documentation

## Next Steps

1. ✓ Run `bash deploy.sh` from your cPanel SSH connection
2. ✓ Open `https://yourdomain.com` in browser
3. ✓ Test SPA routing (click links, refresh page)
4. ✓ Access PhpMyAdmin (cPanel → Databases → phpMyAdmin)
5. ✓ Set up SSL certificate (AutoSSL)
6. ✓ Configure backups in cPanel
7. ✓ Monitor performance via cPanel metrics
8. ✓ Set up database backups

---

**Last Updated:** 2026-07-09
**Status:** Ready for production deployment ✓
**cPanel Compatibility:** Fully tested and optimized ✓
