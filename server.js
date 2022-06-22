const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8000

app.use(cors())

const rappers = {
   '21 savage':{
    'age':29,
    'name':'Shéyaa Bin Abraham-Joseph',
    'location':'England'
   },
   'chance the rapper':{
       'age': 29,
       'name': 'Chancelor',
       'location': 'Chicago'
   },
   'unknown':{
       'age': 0,
       'name': 'Not available on Database',
       'location': 'Not available on Database'
   }


}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()

    if(rappers[rapperName]){
    response.json(rappers[rapperName])
    }else {response.json(rappers['unknown'])}

  })

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server Running PORT:${PORT}`)
})