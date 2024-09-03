const mongoose = require('mongoose')


const URI = 'mongodb+srv://baranidharan759:kQmBs1rQr3DH09uQ@cluster0.4y8kncq.mongodb.net/'

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            URI,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        )
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`MongoDB error when connecting: ${error}`);
    }
}
connectDB()
module.exports = mongoose
