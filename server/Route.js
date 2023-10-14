const axios = require("axios");
const express = require("express");
const router = express.Router();
const fileId = "1DQtlQ__q2TU9wxQ9cCMYNK86TQoDWcrG";
const downloadUrl = `https://drive.google.com/uc?id=${fileId}`;

async function fetchData() {
  try {
    const response = await axios.get(downloadUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

router.post("/send", async (req, res) => {
  try {
    // console.log(req.body.name);
    const name = req.body.name; 
    const dataArray = await fetchData();
    const foundObject = dataArray.find(obj => obj.name === name);

    return res.status(200).json({foundObject:foundObject});
    
  } catch (err) {
    console.log(err);
    res.status(500).json(500);
  }
});

module.exports = router;
