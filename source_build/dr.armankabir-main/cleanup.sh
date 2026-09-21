#!/bin/bash
# Cleanup script for cPanel deployment
# Removes all ICP, Vercel, Docker, and unnecessary configuration files

set -e

echo "🧹 Starting cleanup for cPanel-only deployment..."
echo ""

# Files to remove
FILES_TO_REMOVE=(
    "icp.yaml"
    "vercel.json"
    "Dockerfile"
    "mops.toml"
    "mops.lock"
    "caffeine.toml"
    "decode-csv.mjs"
    "AGENTS.md"
    "DESIGN.md"
)

# Directories to remove
DIRS_TO_REMOVE=(
    ".old"
    "did"
)

# Remove files
echo "📄 Removing unnecessary files..."
for file in "${FILES_TO_REMOVE[@]}"; do
    if [ -f "$file" ]; then
        echo "  ❌ Deleting: $file"
        git rm "$file" 2>/dev/null || echo "  ⚠️  Already removed or not found: $file"
    fi
done

echo ""
echo "📁 Removing unnecessary directories..."
# Remove directories
for dir in "${DIRS_TO_REMOVE[@]}"; do
    if [ -d "$dir" ]; then
        echo "  ❌ Deleting: $dir/"
        git rm -r "$dir" 2>/dev/null || echo "  ⚠️  Already removed or not found: $dir"
    fi
done

echo ""
echo "📝 Staging changes..."
git add -A

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📊 Changes to commit:"
git status --short || true

echo ""
echo "🚀 Ready to commit. Run:"
echo "   git commit -m 'Clean up: Remove ICP, Vercel, Docker configs for cPanel deployment'"
echo "   git push origin main"
