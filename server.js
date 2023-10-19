import { fastify } from "fastify"
import { DatabaseMemoryPostgress } from "./dataBasePostgress.js"

const server = fastify()

const database = new DatabaseMemoryPostgress()

console.log("O Server Esta ON 🚀🚀🚀")

//! Retorna a lista de Person
server.get('/persons', async () => {
    const person = await database.list()
    
    return person
})

//! Cria uma Person
server.post('/persons/create', async (request, replay) => {
   
    const { nome, idade, emprego, genero }  = request.body
    

    await database.create({
        nome,
        idade, 
        emprego, 
        genero
   })

   return replay.status(201).send()
})

//! Muda uma Person
server.put('/persons/:id', async (request, replay) => {
    const personId = request.params.id 
    const { nome, idade, emprego, genero }  = request.body


    await database.update(personId, {
        nome,
        idade, 
        emprego, 
        genero
    })


    return replay.status(204).send
})

//! Deleta uma Person
server.delete('/persons/:id', async (request, replay) => {
    const personId = request.params.id 

    await database.delete(personId)
  
    return replay.status(204).send()
})


server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})