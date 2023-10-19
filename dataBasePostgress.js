import { randomUUID } from "node:crypto"
import {sql} from "./db.js"

export  class DatabaseMemoryPostgress {
    async list() {
      const person = await sql`select * from person`

      return person
    }
    
    async create(person) {
      const personId = randomUUID()
      const {nome, idade, emprego, genero} = person

      await sql`insert into person (id, nome, idade, genero, emprego) VALUES (${personId}, ${nome}, ${idade}, ${genero}, ${emprego})`
    }

    async update(personId, person) {
      const {nome, idade, emprego, genero} = person

      await sql` update person set nome = ${nome}, idade = ${idade}, genero =  ${genero}, emprego = ${emprego} where id = ${personId}`
    }
    
    async delete(personId) {
      
      await sql`delete from person where id = ${personId}`
    }
    
}