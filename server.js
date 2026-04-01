const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  const filePath = path.join('C:\\Users\\Frances\\.openclaw\\agents\\brook\\agent\\website', req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const types = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[ext] || 'text/plain'});
    res.end(data);
  });
});
server.listen(8765, () => console.log('Server running on port 8765'));
