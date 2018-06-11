const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Index Page from index dot js");
    res.send("Index.html");
});

module.exports = router;