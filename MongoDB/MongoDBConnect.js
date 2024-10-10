
import mongoose from 'mongoose';

const MongoDB = () => {
    mongoose.connect('mongodb+srv://vaishalitankonly4loginsites:doo5sFH5BilUYK9Y@blooddata.vpp2o.mongodb.net/blood111?retryWrites=true&w=majority'), {
        socketTimeoutMS: 60000,  // 1 minute
        connectTimeoutMS: 60000 // 1 minute
    }
        .then(() => {
            console.log('MongoDB Connected successfully!')
        });
}

export default MongoDB;