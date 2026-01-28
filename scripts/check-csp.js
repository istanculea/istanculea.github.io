#!/usr/bin/env node

/**
 * CSP Compliance Checker
 * 
 * This script scans the source code for potential CSP violations:
 * - eval() usage
 * - new Function() usage
 * - setTimeout/setInterval with string arguments
 * 
 * @eslint-env node
 */

/* eslint-env node */

import { readFileSync } from 'fs';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATTERNS = {
  eval: {
    regex: /\beval\s*\(/g,
    message: 'eval() usage detected - violates CSP'
  },
  newFunction: {
    regex: /\bnew\s+Function\s*\(/g,
    message: 'new Function() usage detected - violates CSP'
  },
  setTimeoutString: {
    regex: /setTimeout\s*\(\s*['"`]/g,
    message: 'setTimeout() with string argument detected - violates CSP'
  },
  setIntervalString: {
    regex: /setInterval\s*\(\s*['"`]/g,
    message: 'setInterval() with string argument detected - violates CSP'
  }
};

async function checkFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const violations = [];

  for (const [name, { regex, message }] of Object.entries(PATTERNS)) {
    const matches = content.match(regex);
    if (matches) {
      violations.push({
        file: filePath,
        pattern: name,
        message,
        count: matches.length,
        lines: findLineNumbers(content, regex)
      });
    }
  }

  return violations;
}

function findLineNumbers(content, regex) {
  const lines = content.split('\n');
  const matchingLines = [];

  lines.forEach((line, index) => {
    if (regex.test(line)) {
      matchingLines.push(index + 1);
    }
  });

  return matchingLines;
}

async function main() {
  console.log('🔍 Scanning for CSP violations...\n');

  const files = await glob('src/**/*.{ts,tsx,js,jsx}', {
    cwd: path.join(__dirname, '..'),
    absolute: true
  });

  let totalViolations = 0;
  const allViolations = [];

  for (const file of files) {
    const violations = await checkFile(file);
    if (violations.length > 0) {
      allViolations.push(...violations);
      totalViolations += violations.length;
    }
  }

  if (totalViolations === 0) {
    console.log('✅ No CSP violations detected!\n');
    console.log('The codebase appears to be CSP-compliant.');
    process.exit(0);
  } else {
    console.log(`❌ Found ${totalViolations} potential CSP violation(s):\n`);
    
    allViolations.forEach(({ file, pattern, message, count, lines }) => {
      const relPath = path.relative(path.join(__dirname, '..'), file);
      console.log(`📄 ${relPath}`);
      console.log(`   Pattern: ${pattern}`);
      console.log(`   ${message}`);
      console.log(`   Lines: ${lines.join(', ')}`);
      console.log(`   Count: ${count}\n`);
    });

    console.log('⚠️  Please review and fix these violations before deploying.');
    console.log('See DEPLOYMENT.md for CSP compliance guidelines.');
    
    // Exit with error code to fail CI if violations found
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Error running CSP check:', error);
  process.exit(1);
});
