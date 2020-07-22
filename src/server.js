const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')
//const videos = require('./data')

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)


server.set('view engine', 'njk')


nunjucks.configure('src/app/views', {
    express:server,
    autoescape: false,
    noCache: true
})


server.get('/',(req,res) => {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/59096165?s=460&u=cfa7751ada8a4093f0068156cb1fb428adea8d3e&v=4",
        name: "Luciano Junior",
        role: "Desenvolvedor Web",
        description:"Interessado em: | Javascript | TypeScript | MongoDb | Node.Js | React.JS | Angular | React Native",
        links: [
            {name: "Github", url:"https://github.com/Ljuniorcode"},
            {name: "Linkedin", url:"https://www.linkedin.com/in/luciano-junior-dev/"}
        ]
    }

    return res.render('about',{about})

})


server.get('/videos',(req,res) => {
    return res.render('videos',{items: videos})
})


server.get('/video',(req,res) => {
    const id = req.query.id
    const video = videos.find(function(video){
        return video.id == id
        
    })
    if(!video){
        return res.send('Video not found, verifique o endereço na url')
    }
    return res.render("video", {item: video})
})


server.listen(5001,()=>{
    return console.log('Server run... tudo Ok...')
})