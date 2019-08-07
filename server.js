 const http = require('http');
 const app = require('./app')

 const hostName = '0.0.0.0'
 const port = process.env.PORT || 3000;

 const server = http.createServer(app);


 app.get('/', (req,res) => {
     
 })

 server.listen(port, hostName, () => {
     console.log('SERVER STARTED')
 });