#!/usr/bin/env node
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
	console.error('Usage: npm run new-post -- "Post title"');
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.normalize('NFD')
	.replace(/[̀-ͯ]/g, '')
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-+|-+$/g, '');

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const blogDir = join(root, 'src', 'content', 'blog');
if (!existsSync(blogDir)) mkdirSync(blogDir, { recursive: true });

const filePath = join(blogDir, `${slug}.md`);
if (existsSync(filePath)) {
	console.error(`Already exists: ${filePath}`);
	process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);

writeFileSync(
	filePath,
	`---
title: "${title}"
description: ""
date: ${date}
draft: true
---

`
);

console.log(`Created ${filePath}`);
console.log('Write the post, set draft: false when ready, then commit and push.');
