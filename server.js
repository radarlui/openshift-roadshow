var express = require('express');
var app = express();

app.use(express.static('public'))
app.use(express.static('./node_modules/font-awesome'))
app.use('/api/workshops/roadshow/content/assets', express.static('public'))

app.get('/api/workshops', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify([{"id":"roadshow","name":"Roadshow"}]));
})

app.get('/api/workshops/roadshow', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({"id":"roadshow","modules":["environment","install","explore","docker","scaling","routes","logging","permissions","remote-ops","java","databases","configmap","application-health","pipelines","codechanges","templates","clustering","further-resources"],"name":"Roadshow"}));
})

app.get('/api/workshops/roadshow/modules', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({"environment":{"id":null,"name":"Environment Overview","requires":[]},"install":{"id":null,"name":"Installing the *oc* client tool","requires":[]},"explore":{"id":null,"name":"Exploring the CLI and Web Console","requires":[]},"docker":{"id":null,"name":"Deploying our First Docker Image","requires":[]},"scaling":{"id":null,"name":"Scaling","requires":[]},"routes":{"id":null,"name":"Creating Routes","requires":[]},"logging":{"id":null,"name":"Exploring OpenShift's Logging Capabilities","requires":[]},"permissions":{"id":null,"name":"Role-Based Access Control","requires":[]},"remote-ops":{"id":null,"name":"Remote Operations","requires":[]},"java":{"id":null,"name":"Deploying Java Code","requires":[]},"databases":{"id":null,"name":"Adding a Database (MongoDB)","requires":[]},"configmap":{"id":null,"name":"Externalizing Application Configurations","requires":[]},"application-health":{"id":null,"name":"Application Health","requires":[]},"pipelines":{"id":null,"name":"Automating Deployment with CI/CD Pipeline","requires":["application-health"]},"codechanges":{"id":null,"name":"Using Source 2 Image for Code Changes","requires":[]},"templates":{"id":null,"name":"Using Application Templates","requires":[]},"clustering":{"id":null,"name":"Clustering Stateful Java EE Applications","requires":["permissions"]},"further-resources":{"id":null,"name":"Further resources","requires":[]}}))
})

app.get('/api/workshops/roadshow/content/module/*', function (req, res) {
   console.log(req.params[0]);
   path = req.params[0] + ".html";
   res.sendfile(path, {root: './public'});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

