const express = require('express');
const attends = require('../../Models/Staff/attends');
const Attends = require('../../Models/Staff/attends');
const router = express.Router();

//save posts
router.post('/attend/save', (req,res) => {
    let newAttend = new Attends(req.body);
    newAttend.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Attend saved successfully"
        });
    });
});

//get posts

router.get('/attends', (req,res) =>{
    Attends.find().exec((err,attends)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
            }
            return res.status(200).json({
                success:true,
                existingAttends:attends
            });
        });
    });

    //get a specific post
    router.get('/attend/:id',(req,res) => {
        let attendId = req.params.id;

        Attends.findById(attendId,(err,attend) =>{
            if(err){
             return res.status(400).json({success:false, err});

            }
            return res.status(200).json({
                success:true,
                attend 
            });
        });
    });

//update posts
router.put('/attend/update/:id',(req,res) =>{
    Attends.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,attend)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete posts
router.delete('/attend/delete/:id',(req,res) =>{
    Attends.findByIdAndRemove(req.params.id).exec((err,deletedAttend)=>{
        if(err)
            return res.status(400).json({
                message:"Deleted unsuccessful", err
            });
        return res.json({
            message:"Deleted Successfully",deletedAttend
        });
    });
});


module.exports = router;