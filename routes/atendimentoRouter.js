import express from "express"
const router = express.Router()

// get post put delete

router.get("/atendimentos", (req, res) => {
    res.send("Estamos listando os atendimentos do banco de dados")
})

router.post("/atendimentos", (req, res) => {
    res.send("Criando novo atendimento")
})

// /:id serve como parâmetro
router.put("/atendimento/:id", (req, res) => {
    res.send(`Atualizando o atendimento de index ${id}`)
})

router.delete("/atendimento/:id", (req, res) => {
    res.send(`Deletando atendimento de index ${id}`)
})
