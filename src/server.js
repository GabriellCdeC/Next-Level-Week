//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses} = require('./pages')

//Configurar o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noChace: true,
})

//Configurar arquivos estáticos (css, html etc)

//Inicio e configuração do servidor
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study",  pageStudy) 
.get("/give-classes", pageGiveClasses)
//Start do serve
.listen(5500)