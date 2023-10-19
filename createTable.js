import { sql } from "./db.js"

// sql`DROP TABLE person`.then(() => {
//       console.log("Tabela Deletada")
// })

sql`
      CREATE TABLE person (
            id TEXT PRIMARY KEY,
            nome TEXT,
            idade INTEGER,
            genero TEXT,
            emprego TEXT
      );
`.then(() => {
      console.log("Tabela criada")
})