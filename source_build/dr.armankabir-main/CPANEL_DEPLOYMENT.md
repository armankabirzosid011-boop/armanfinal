# cPanel Deployment Guide

This document provides instructions for deploying the Dr. Arman Kabir's Care application on cPanel hosting.

## Prerequisites

- cPanel hosting account with Node.js support (v20.x or higher)
- SSH access to your cPanel account
- pnpm package manager

## Deployment Steps

### 1. SSH into Your cPanel Server

```bash
ssh user@yourdomain.com
```

### 2. Clone or Upload Your Repository

```bash
cd ~/
git clone https://github.com/drarmankabir-ops/drarmankabir0.git
cd drarmankabir0
```

### 3. Run the Deployment Script

```bash
bash deploy.sh
```

The script will:
- Check Node.js and pnpm versions
- Install dependencies
- Build the frontend
- Deploy files to public_html

### 4. Manual Steps in cPanel

1. Log into your cPanel account
2. Go to **File Manager**
3. Navigate to **public_html**
4. Verify that your built files are present
5. Go to **SSL/TLS Status** and install an SSL certificate (recommended)

### 5. Configure Node.js Application (if using Node.js backend)

1. In cPanel, go to **Setup Node.js App**
2. Create a new application:
   - **App name**: drarmankabir-care
   - **Node.js version**: 20.x
   - **App JS file**: (leave empty for frontend-only)
   - **Public URL**: your domain
   - **App directory**: /home/user/drarmankabir0

### 6. Environment Configuration

Create or update `.env` file in your application directory:

```env
NODE_ENV=production
VITE_API_BASE_URL=https://yourdomain.com/api
```

## File Structure After Deployment

```
~/public_html/
├── index.html
├── .htaccess          # SPA routing and security headers
├── css/               # Compiled CSS files
├── js/                # Compiled JavaScript files
├── assets/            # Images and other assets
└── env.json           # Environment configuration
```

## Troubleshooting

### Issue: Build fails
- Ensure pnpm is installed: `npm install -g pnpm`
- Check Node.js version: `node --version` (should be v20+)
- Clear cache: `pnpm store prune`

### Issue: 404 errors on refresh
- Verify `.htaccess` is in public_html
- Check mod_rewrite is enabled in cPanel
- Restart Apache: cPanel → Restart Services

### Issue: Slow performance
- Enable GZIP compression (configured in .htaccess)
- Enable browser caching (configured in .htaccess)
- Minimize JavaScript and CSS
- Use CDN for static assets

## SSL/TLS Certificate

1. Go to cPanel → **SSL/TLS Status**
2. Click **Manage SSL sites**
3. Select your domain and install AutoSSL (free with cPanel)

## Update Application

To update your application:

```bash
cd ~/drarmankabir0
git pull origin main
bash deploy.sh
```

## Performance Optimization

### Enable Compression
The `.htaccess` file already includes GZIP compression configuration.

### Cache Static Assets
The `.htaccess` file includes cache expiry headers for optimal performance.

### Minimize Bundles
Ensure your frontend build process includes minification:
- CSS minification
- JavaScript minification
- Image optimization

## Support

For issues or questions:
1. Check cPanel error logs: **cPanel → Error Log**
2. Review application logs in `~/logs/`
3. Verify .htaccess syntax
4. Contact your hosting provider for cPanel-specific support

## Security Checklist

- [ ] SSL/TLS certificate installed and active
- [ ] .htaccess security headers in place
- [ ] Node modules not exposed in public_html
- [ ] Sensitive environment variables in .env (not in git)
- [ ] Regular backups enabled
- [ ] File permissions properly set (644 for files, 755 for directories)
