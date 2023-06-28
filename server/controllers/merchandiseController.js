const Merchandise = require('../models/Merchandise')
const mongoose = require('mongoose');



exports.getMerchandises = async (req, res) => {
    try {
        const merchandises = await Merchandise.find({})
        res.status(200).json({ merchandises, status: true, msg: `Merchandises fetched successfully` })
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
