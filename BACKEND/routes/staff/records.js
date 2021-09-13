const express = require('express');
const records = require('../../Models/Staff/records');
const Records = require('../../Models/Staff/records');
const router = express.Router();

//save posts
router.post('/record/save', (req,res) => {
    let newRecord = new Records(req.body);
    newRecord.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Records saved successfully"
        });
    });
});

//get posts

router.get('/records', (req,res) =>{
    Records.find().exec((err,records)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
            }
            return res.status(200).json({
                success:true,
                existingRecords:records
            });
        });
    });

    //get a specific post
    router.get('/record/:id',(req,res) => {
        let recordId = req.params.id;

        Records.findById(recordId,(err,record) =>{
            if(err){
             return res.status(400).json({success:false, err});

            }
            return res.status(200).json({
                success:true,
                record 
            });
        });
    });

//update posts
router.put('/record/update/:id',(req,res) =>{
    Records.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,record)=>{
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
router.delete('/record/delete/:id',(req,res) =>{
    Records.findByIdAndRemove(req.params.id).exec((err,deletedRecord)=>{
        if(err)
            return res.status(400).json({
                message:"Deleted unsuccessful", err
            });
        return res.json({
            message:"Deleted Successfully",deletedRecord
        });
    });
});


module.exports = router;