#!/bin/bash
# cPanel Deployment Script
# Deploy Dr. Arman Kabir's Care application to cPanel hosting
# This script handles both the frontend React app and any Node.js backend
set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║       cPanel Deployment Script - Dr. Arman Care       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"

# Define cleanup function for exit
cleanup() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
    else
        echo -e "${RED}✗ Deployment failed with exit code $1${NC}"
        echo -e "${YELLOW}Rolling back...${NC}"
        if [ -d "public_html.backup" ]; then
            rm -rf public_html
            mv public_html.backup public_html
            echo -e "${YELLOW}Rollback complete${NC}"
        fi
    fi
    exit $1
}

# Handle script interruption
trap 'cleanup 1' INT TERM ERR

# Check prerequisites
echo -e "${YELLOW}→ Checking prerequisites...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed${NC}"
    cleanup 1
fi
if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}✗ pnpm is not installed. Install with: npm install -g pnpm${NC}"
    cleanup 1
fi

echo -e "${GREEN}✓ Node.js $(node --version)${NC}"
echo -e "${GREEN}✓ pnpm $(pnpm --version)${NC}"

# Install root dependencies
echo -e "${YELLOW}→ Installing root dependencies...${NC}"
pnpm install --prefer-offline
echo -e "${GREEN}✓ Root dependencies installed${NC}"

# Build frontend
echo -e "${YELLOW}→ Building frontend application...${NC}"
cd src/frontend
pnpm install --prefer-offline
if ! pnpm build; then
    echo -e "${RED}✗ Frontend build failed${NC}"
    cd ../..
    cleanup 1
fi
echo -e "${GREEN}✓ Frontend build complete${NC}"

# Setup environment
echo -e "${YELLOW}→ Setting up environment configuration...${NC}"
if [ -f "env.json" ] && [ -f "dist/env.json" ]; then
    echo -e "${GREEN}✓ env.json configured${NC}"
elif [ -f "env.json" ]; then
    cp env.json dist/
    echo -e "${GREEN}✓ env.json copied to dist${NC}"
else
    echo -e "${YELLOW}⚠ env.json not found, creating defaults...${NC}"
    cat > dist/env.json << 'EOF'
{
  "apiBaseUrl": "https://yourdomain.com/api",
  "environment": "production",
  "version": "1.0.0"
}
EOF
    echo -e "${GREEN}✓ Default env.json created${NC}"
fi

cd ../..

# Setup public_html
echo -e "${YELLOW}→ Setting up cPanel deployment directory...${NC}"
PUBLIC_HTML="${CPANEL_PUBLIC_HTML:-public_html}"

# Create backup
if [ -d "$PUBLIC_HTML" ] && [ "$(ls -A $PUBLIC_HTML)" ]; then
    BACKUP_NAME="${PUBLIC_HTML}.backup.$(date +%s)"
    echo -e "${YELLOW}  Creating backup: $BACKUP_NAME${NC}"
    cp -r "$PUBLIC_HTML" "$BACKUP_NAME"
    echo -e "${GREEN}✓ Backup created${NC}"
fi

# Deploy files
echo -e "${YELLOW}→ Deploying application to $PUBLIC_HTML...${NC}"
mkdir -p "$PUBLIC_HTML"
rm -rf "${PUBLIC_HTML:?}"/*
cp -r src/frontend/dist/* "$PUBLIC_HTML/"

# Verify deployment
echo -e "${YELLOW}→ Verifying deployment...${NC}"
if [ -f "$PUBLIC_HTML/index.html" ]; then
    echo -e "${GREEN}✓ index.html deployed${NC}"
else
    echo -e "${RED}✗ index.html not found in deployment${NC}"
    cleanup 1
fi

if [ -f "$PUBLIC_HTML/.htaccess" ]; then
    echo -e "${GREEN}✓ .htaccess configured${NC}"
else
    echo -e "${YELLOW}⚠ .htaccess not found, copying...${NC}"
    cp .htaccess "$PUBLIC_HTML/"
    echo -e "${GREEN}✓ .htaccess copied${NC}"
fi

# Set correct permissions
echo -e "${YELLOW}→ Setting file permissions...${NC}"
find "$PUBLIC_HTML" -type f -exec chmod 644 {} \;
find "$PUBLIC_HTML" -type d -exec chmod 755 {} \;
echo -e "${GREEN}✓ Permissions set (files: 644, directories: 755)${NC}"

# Display summary
echo ""
echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           Deployment Summary & Next Steps             ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}✓ Application deployed to: $PUBLIC_HTML${NC}"
echo ""
echo -e "${YELLOW}Next Steps in cPanel:${NC}"
echo "  1. Go to File Manager → $PUBLIC_HTML"
echo "  2. Verify files are present (index.html, .htaccess, js/, css/, assets/)"
echo "  3. Go to SSL/TLS Status → Install AutoSSL (recommended)"
echo "  4. Test: Visit your domain in browser"
echo "  5. If 404 on refresh, check that mod_rewrite is enabled"
echo ""
echo -e "${YELLOW}Testing SPA Routing:${NC}"
echo "  • Navigate to: https://yourdomain.com/dashboard"
echo "  • Refresh page - should still show the app (not 404)"
echo "  • Open browser console (F12) for any errors"
echo ""
echo -e "${YELLOW}PhpMyAdmin Access:${NC}"
echo "  • Via cPanel: Home → Databases → phpMyAdmin"
echo "  • Or direct URL: https://yourdomain.com/phpmyadmin"
echo ""
echo -e "${YELLOW}For Troubleshooting:${NC}"
echo "  • Check cPanel Error Log: Home → Error Log"
echo "  • View .htaccess configuration: $PUBLIC_HTML/.htaccess"
echo "  • Test mod_rewrite: Create test.html and check routing"
echo ""

cleanup 0
