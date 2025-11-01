import { Comments } from "../../../../data/comments";
export default function handler(req,res){
    if(req.method === 'DELETE'){
        const {commentId} = req.query;
        const deletedComment = Comments.find(comment=>{
            return comment.id === Number(commentId);
        });
        const index = Comments.indexOf(deletedComment);
        Comments.splice(index,1);
        res.status(200).json(deletedComment)
    }
    //? getbyid
    //? put
   
}