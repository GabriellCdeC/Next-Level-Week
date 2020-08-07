const proffys = [
    {
        name: "Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(62) 99232-2442", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química", 
        cost: "40,80",
        weekday: [0], 
        time_from:[720], 
        time_to: [1200]
    },
    {
        name: "Gabriell Castro ", 
        avatar:"https://avatars2.githubusercontent.com/u/49693579?s=460&u=3a0f1caf5c69573166951b54fba27f875b11ab60&v=4",
        whatsapp: "(62) 98122-2832", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Geografia",
        cost: "80,00",
        weekday: [0], 
        time_from:[720], 
        time_to: [1200]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",   
]

function getSubject(subjectNumber) {
    return subjects[+subjectNumber - 1]
}


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