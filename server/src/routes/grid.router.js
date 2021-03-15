const express = require('express');
const router = express.Router();
const Grid = require('../models/grid');

router.get("/", async (req, res) => {
    try {
        let grid = {
            userId : req.user.userId
        };
        const result = await Grid.find(grid);
        res.status(200).send({
            success: true,
            data : result
        });
    }
    catch (ex) {
        res.status(400).send({
            success: false,
            error: ex.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        let grid = {
            name: req.body.name,
            images: req.body.images,
            userId : req.user.userId
        };
        
        const result = await Grid.create(grid);
        res.status(200).send({
            success: true,
            data : result
        });
    }
    catch (ex) {
        res.status(400).send({
            success: false,
            error: ex.message
        });
    }
});

router.put("/:gridId", async (req, res) => {
    try {
        let grid = {
            title: req.body.name,
            images: req.body.images,
            userId : req.user.userId
        };
        
        const result = await Grid.findOneAndUpdate(req.query.gridId,grid);
        res.status(200).send({
            success: true,
            data : result
        });
    }
    catch (ex) {
        res.status(400).send({
            success: false,
            error: ex.message
        });
    }
});

module.exports = router;