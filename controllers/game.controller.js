import  express  from "express";
import Game from '../modals/game.js';
import { validationResult } from "express-validator";




export function getAll(req, res)
{
    Game.find({}).then(docs=> {
        res.status(200).json(docs);
    }).catch(err =>{
        res.status(500).json({er : error});
    });
   
}

export function getOnce(req, res)
{
    Game.findOne({"name": req.params.name}).then(doc => {
        res.status(200).json(doc);
    }).catch(err => {
        res.status(500).json({err: error})
    })
}


export function addOnce(req,res){
    if(!validationResult(req).isEmpty){
        res.status(400).json({ errors: validationResult(req).array()});

    }
    else{
Game.create(
        {
            name: req.body.name,
            year: req.body.year,
            onSlae: req.body.onSale,
            image: `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
        }
    ).then(newGame => {
        res.status(200).json(newGame);
    }).catch(er => {
        res.status(500).json({error: err});
    });
    }
    
}


export function putOnce(req, res)
{
    Game.findOneAndUpdate({name: req.params.name} , {"onSale": false}
    ).then(doc =>{
        res.status(200).json(doc);
    }).catch(err=>{
        res.status(500).json({err: error});
    });
}

export function deleteOnce(req,res)
{
Game.findOneAndDelete({name: req.params.name} ).then(doc =>{
    res.status(200).json(doc);
}).catch(err=>{
    res.status(500).json({err: error});
});
}

export function deleteAll(req,res)
{
Game.remove({"onSale": false} ).then(doc =>{
    res.status(200).json(doc);
}).catch(err=>{
    res.status(500).json({err: error});
});
}
