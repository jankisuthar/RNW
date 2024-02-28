const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url=='/')
    {
        res.end("suceesful")
    }
    else if(req.url=='/about')
    {
        res.end("about page")
    }
    else{
        res.writeHead('404',{"Content-Headers":"application/json"})
        res.end("page not found")
    }
})

server.listen(7899,()=>{
    console.log("server listen")
})