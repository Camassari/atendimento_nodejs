// const express = require("express")

// Nome da variável que recebe a biblioteca é express
import express from "express"

const app = express()
const porta = 3000

app.listen(porta, (error) => {
    if (error) {
        console.log("Deu erro")
        return
    }
    console.log(`Escutando na porta ${porta}`)
})

