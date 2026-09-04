// const express = require("express")

// Nome da variável que recebe a biblioteca é express
import express from "express"
import atendimentoRouter from "./routes/atendimentoRouter.js"

const app = express()
const porta = 3000

// Use as arotas que estão em "atendimentoRouter"
app.use(atendimentoRouter)

app.listen(porta, (error) => {
    if (error) {
        console.log("Deu erro")
        return
    }
    console.log(`Escutando na porta ${porta}`)
})