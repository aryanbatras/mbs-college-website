#!/usr/bin/env node

/**
 * Build Script: Copy Media to Public
 * 
 * This script copies media files from the root /media folder to /public/media
 * at build time, ensuring static assets are available for serving.
 * 
 * Usage:
 *   node scripts/copy-media.mjs
 * 
 * This runs automatically before `next build` via the package.json script.
 */

import { cpSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const SOURCE = join(ROOT, 'media');
const DEST = join(ROOT, 'public', 'media');

console.log('📦 Copying media files to public...');

if (!existsSync(SOURCE)) {
  console.log('⚠️  No media folder found at root. Skipping...');
  process.exit(0);
}

try {
  mkdirSync(DEST, { recursive: true });
  cpSync(SOURCE, DEST, { recursive: true });
  console.log('✅ Media files copied successfully!');
} catch (error) {
  console.error('❌ Error copying media files:', error.message);
  process.exit(1);
}