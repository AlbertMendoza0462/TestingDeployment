"use strict"
import express from 'express';
import { deleteById, findById, getAll, save, updatePatch, updatePut } from '../services/ProductService.js';

const router = express.Router({ mergeParams: true })

router.get("/", (req, res) => {
    res.send(getAll())
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.send(findById(id))
})

router.post("/", (req, res) => {
    res.send(save())
})

router.put("/", (req, res) => {
    res.send(updatePut())
})

router.patch("/", (req, res) => {
    res.send(updatePatch())
})

router.delete("/", (req, res) => {
    res.send(deleteById())
})

export default router