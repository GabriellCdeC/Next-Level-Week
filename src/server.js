const { subjects, weekdays, getSubject} = require('./utils/formart')

function pageLanding (req, res) {
    return res.render("index.html")
}

function pageGiveClasses (req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
     //Adicionar data ao objeto de proffys
    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }else {
        return res.render("give-classes.html", {subjects, weekdays })
    }     
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

const express = require('express')
const server = express()

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