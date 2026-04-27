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

const badRegex = /src=\{\`\$\{import\.meta\.env\.VITE_API_URL \? import\.meta\.env\.VITE_API_URL\.replace\('\/api\/', ''\) : 'http:\/\/127\.0\.0\.1:8000'\}\$\{([^}]+)\}\`\}/g;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (badRegex.test(content)) {
        content = content.replace(badRegex, (match, p1) => {
            return `src={${p1}?.startsWith('http') ? ${p1} : \`\${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}\${${p1}}\`}`;
        });
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed:', file);
    }
});
console.log('Done fixing URLs again');
