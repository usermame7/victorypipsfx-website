#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying deployment readiness...\n');

const checks = [
  {
    name: 'Build directory exists',
    check: () => fs.existsSync('dist'),
    fix: 'Run "npm run build" to create the production build'
  },
  {
    name: 'Server build exists',
    check: () => fs.existsSync('dist/index.js'),
    fix: 'Run "npm run build" to build the server'
  },
  {
    name: 'Public assets exist',
    check: () => fs.existsSync('dist/public'),
    fix: 'Run "npm run build" to build the frontend assets'
  },
  {
    name: 'Main HTML file exists',
    check: () => fs.existsSync('dist/public/index.html'),
    fix: 'Run "npm run build" to generate the HTML file'
  },
  {
    name: 'Assets directory exists',
    check: () => fs.existsSync('dist/public/assets'),
    fix: 'Run "npm run build" to generate bundled assets'
  },
  {
    name: 'Package.json has start script',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return pkg.scripts && pkg.scripts.start;
    },
    fix: 'Add "start" script to package.json'
  }
];

let allPassed = true;

for (const { name, check, fix } of checks) {
  const passed = check();
  console.log(`${passed ? '✅' : '❌'} ${name}`);
  
  if (!passed) {
    console.log(`   Fix: ${fix}`);
    allPassed = false;
  }
}

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🚀 All checks passed! Ready for deployment.');
  console.log('\nTo deploy:');
  console.log('1. Make sure NODE_ENV=production is set in your deployment environment');
  console.log('2. Run: npm start');
} else {
  console.log('❌ Some checks failed. Fix the issues above before deploying.');
  process.exit(1);
}