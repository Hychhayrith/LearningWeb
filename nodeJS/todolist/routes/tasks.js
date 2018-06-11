const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://chhayrith:chhayrith@ds063833.mlab.com:63833/mytasks_chhayrith', ['mytasks']);

// Fetch all tasks from database
router.get('/tasks', (req, res, next) => {
    db.mytasks.find((err, tasks) => {
        if(err)res.send(err);
        res.json(tasks);
    });
    // res.send("From tasks page dot js");
});

// Fetch a specific data from database
router.get('/task/:id', (req, res, next) => {
    db.mytasks.findOne({_id: mongojs.ObjectId(req.params.id)},(err, task) => {
        if(err) res.send(err);
        res.json(task);
    });
});


//Save the research data
router.post('/task', (req, res, next) => {
    let task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        })
    }else{
        db.mytasks.save(task, (err, task) => {
            if(err) res.send(err)
            res.json(task)
        })
    }
})

// Delete the task
router.get('task/:id', (req, res, next) => {
    db.mytasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{
        if(err) res.send(err)
        res.json(task)
    })
})

// Update task
router.put('/task/:id', (req, res, next) => {
    let task = req.body;
    let updTask = {};
    if(task.isDone) {
        updTask.isDone = task.isDone;
    }
    if(task.title){
        updTask.title = updTask.title;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, (err, task) => {
            if(err) res.send(err);
            res.json(task);
        })
    }
})


module.exports = router;