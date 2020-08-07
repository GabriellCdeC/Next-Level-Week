//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//Configurar o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noChace: true,
})

//Configurar arquivos estáticos (css, html etc)

//Receber os dados via body
server.use(express.urlencoded({ extended:true }))
//Inicio e configuração do servidor
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study",  pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//Start do serve
.listen(5500)