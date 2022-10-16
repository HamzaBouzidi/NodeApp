import { Express } from "express";
import User from '../modals/user';

const Users =[new User(1, "Hamza" , "123456","w1"),new User(2, "hey" , "123456","w2"),new User(3, "H" , "123456","w3")]
const idAutoIncrement = require("id-auto-increment");

export function addOnce(res,res){
      Id= idAutoIncrement();
    const User = new User(Id,username,password,wallet);
    Users.push(User);
    res.status(201).json({ message: "Created !", entity: User});

}

export function getOnce(req, res){
    res.status(200).json(Users.find(val => val.username === req.params.username))
}
export function putOnce(req, res){
    res.status(200).json<({ message: "Updated !", name:req.params.username});
}