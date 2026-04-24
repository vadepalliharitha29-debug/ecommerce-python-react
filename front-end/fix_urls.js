import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);
const fetchLogic = "(import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + 'products/' : 'http://127.0.0.1:8000/api/products/')";

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace fetch URL
    if (content.includes('fetch("http://127.0.0.1:8000/api/products/")')) {
        content = content.replace(/fetch\("http:\/\/127\.0\.0\.1:8000\/api\/products\/"\)/g, `fetch(${fetchLogic})`);
        changed = true;
    }

    // Replace simple image URLs
    const simpleImgRegex = /\`http:\/\/127\.0\.0\.1:8000\$\{([^}]+)\}\`/g;
    if (simpleImgRegex.test(content)) {
        content = content.replace(simpleImgRegex, (match, p1) => {
            return `\`\${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}\${${p1}}\``;
        });
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed:', file);
    }
});
console.log('Done fixing URLs');
