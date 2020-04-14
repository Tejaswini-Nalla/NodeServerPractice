const path = require('path');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
    fs.readFile(path.join(__dirname,'Html','Index.html'),(error , content) => {
      if(error) throw error;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(content);
    });
  }

  if(req.url === '/about') {
      fs.readFile(path.join(__dirname,'Html','About.html'),(error , content) => {
        if(error) throw error;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(content);
      });
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));