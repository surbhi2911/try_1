
import mongoose from 'mongoose';
const PAGE_SIZE = 1000;
const MongoDB = async () => {
    const { page } = req.query;
    const pageNumber = parseInt(page) || 0;

    mongoose.connect('mongodb+srv://vaishalitankonly4loginsites:doo5sFH5BilUYK9Y@blooddata.vpp2o.mongodb.net/blood111?retryWrites=true&w=majority')
        .then(() => {
            console.log('MongoDB Connected successfully!')
        });
    const collection = client.db("blood111").collection("donations");

    const data = await collection
        .find({})
        .skip(pageNumber * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .toArray();

    res.status(200).json(data);
}


export default MongoDB;