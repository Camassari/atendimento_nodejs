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
router.put("/atendimentos/:id", (req, res) => {
    // const id = req.params.id
    const { id } = req.params
    res.send(`Atualizando o atendimento de index ${id}`)
})

router.delete("/atendimentos/:id", (req, res) => {
    const { id } = req.params
    res.send(`Deletando atendimento de index ${id}`)
})

// ES Modules
export default router