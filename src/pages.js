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

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}