#!/usr/bin/env node

/**
 * Build Script: Copy Media & Docs to Public
 * 
 * This script copies media files and documents from the root-level
 * /media folder to /public/ at build time, ensuring static assets
 * are available for serving by Next.js.
 * 
 * Structure:
 *   media/           → public/media/   (images, videos)
 *   media/docs/      → public/docs/    (PDFs, documents)
 * 
 * Usage:
 *   node scripts/copy-media.mjs
 * 
 * This runs automatically before `next build` via the package.json script.
 */

import { cpSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const MEDIA_SOURCE = join(ROOT, 'media');
const MEDIA_DEST = join(ROOT, 'public', 'media');
const DOCS_DEST = join(ROOT, 'public', 'docs');

console.log('📦 Copying media files to public...');

// Clean up existing public/media and public/docs to avoid stale files
if (existsSync(MEDIA_DEST)) {
  rmSync(MEDIA_DEST, { recursive: true, force: true });
  console.log('🗑️  Cleaned existing public/media/');
}
if (existsSync(DOCS_DEST)) {
  rmSync(DOCS_DEST, { recursive: true, force: true });
  console.log('🗑️  Cleaned existing public/docs/');
}

if (!existsSync(MEDIA_SOURCE)) {
  console.log('⚠️  No media folder found at root. Skipping...');
  process.exit(0);
}

try {
  // Copy all media files (images, videos, etc.)
  mkdirSync(MEDIA_DEST, { recursive: true });
  cpSync(MEDIA_SOURCE, MEDIA_DEST, { recursive: true });
  console.log('✅ Media files copied successfully!');

  // Also ensure media/docs is accessible at public/docs for backward compatibility
  const DOCS_SOURCE = join(MEDIA_SOURCE, 'docs');
  if (existsSync(DOCS_SOURCE)) {
    mkdirSync(DOCS_DEST, { recursive: true });
    cpSync(DOCS_SOURCE, DOCS_DEST, { recursive: true });
    console.log('✅ Document files copied to public/docs/');
  }

  // Summary
  const { readdirSync, statSync } = await import('fs');
  
  let mediaCount = 0;
  let docsCount = 0;
  
  const countFiles = (dir) => {
    let count = 0;
    try {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.isFile()) count++;
        else if (entry.isDirectory()) count += countFiles(join(dir, entry.name));
      }
    } catch {}
    return count;
  };
  
  mediaCount = countFiles(MEDIA_DEST);
  docsCount = existsSync(DOCS_DEST) ? countFiles(DOCS_DEST) : 0;
  
  console.log(`\n📊 Summary:`);
  console.log(`   Media files: ${mediaCount}`);
  console.log(`   Document files: ${docsCount}`);
  console.log(`   Total: ${mediaCount + docsCount}`);

} catch (error) {
  console.error('❌ Error copying files:', error.message);
  process.exit(1);
}
