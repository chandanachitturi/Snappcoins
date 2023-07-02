const Merchandise = require('../models/Merchandise')
const mongoose = require('mongoose');
const gfsPromise = require('../config/gridfsDb')




exports.getMerchandises = async (req, res) => {
    try {
        const { size, pagenum } = req.query
        var query = {}
        query.skip = size * (pagenum - 1)
        query.limit = size
        const merchandises = await Merchandise.find({},{},query).then((data) => {
            return data
        })
        const count = await Merchandise.count({}).then((data) => {
            return data
        })
        res.status(200).json({ merchandises, status: true, msg: `Merchandises fetched successfully` , total_count : count })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
}


exports.getImage = async (req, res) => {
    try {
      const { id } = req.params;
      const _id = new mongoose.Types.ObjectId(id);
      const gfs = await gfsPromise;
  
      const file = await gfs.find({ _id }).toArray();
      if (!file || file.length === 0) {
        return res.status(400).send('No file exists');
      }
  
      const readStream = gfs.openDownloadStream(_id);
      readStream.on('error', (err) => {
        console.error(err);
        return res.status(500).json({ status: false, msg: 'Internal Server Error' });
      });
  
      res.set('Content-Type', file[0].contentType);
      readStream.pipe(res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
    }
  };