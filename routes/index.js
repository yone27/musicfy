const express = require("express");
const router = express.Router();
const data = require('../data')

// @desc Register user
// @access public
router.get("/search", async (req, res) => {
    const query = req.query.q
    // https://api.spotify.com.

    res.json(data)
});

module.exports = router;
