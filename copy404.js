// copy404.js
import fs from 'fs';
import path from 'path';

const source = path.join('dist', 'index.html');
const destination = path.join('dist', '404.html');

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('❌ Failed to create 404.html:', err);
  } else {
    console.log('✅ 404.html created successfully');
  }
});
