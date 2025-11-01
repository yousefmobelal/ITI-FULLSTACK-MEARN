import { Comments } from "../../../../data/comments";
export default function handler(req,res){
    if(req.method === 'GET'){
        res.status(200).json(Comments)
    } 
    //? POST
}