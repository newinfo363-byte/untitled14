const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let filePath;
    let contentType = 'text/html';

    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, 'game.html');
        contentType = 'text/html';
    } else if (req.url.startsWith('/images/')) {
        filePath = path.join(__dirname, req.url);
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp'
        };
        contentType = mimeTypes[ext] || 'image/jpeg';
    } else if (req.url.startsWith('/audio/')) {
        filePath = path.join(__dirname, req.url);
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            '.wav': 'audio/wav',
            '.mp3': 'audio/mpeg',
            '.ogg': 'audio/ogg'
        };
        contentType = mimeTypes[ext] || 'audio/wav';
    } else {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading file');
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

// Only start server if not in Vercel environment
if (process.env.VERCEL !== '1') {
    server.listen(port, () => {
        console.log(`🎮 Flying Bird Game is running!`);
        console.log(`🌐 Open your browser and visit: http://${hostname}:${port}/`);
        console.log(`\n✨ Game Controls:`);
        console.log(`   - Click or press SPACE to make the bird fly`);
        console.log(`   - Avoid the pipes and get the highest score!`);
    });
}

// Export for Vercel serverless functions
module.exports = server;

