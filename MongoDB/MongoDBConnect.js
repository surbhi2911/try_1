
import mongoose from 'mongoose';

const MongoDB = () => {
    mongoose.connect('mongodb+srv://vaishalitankonly4loginsites:doo5sFH5BilUYK9Y@blooddata.vpp2o.mongodb.net/blood111?retryWrites=true&w=majority')
        .then(() => {
            console.log('MongoDB Connected successfully!')
        });
}

export default MongoDB;