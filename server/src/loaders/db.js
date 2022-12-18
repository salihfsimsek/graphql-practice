import mongoose from 'mongoose';

const db = mongoose.connection;

db.once('open', () => {
    console.log('connected to db')
}
);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
    }
}

export default connectDB;