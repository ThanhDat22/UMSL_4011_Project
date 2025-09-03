import app from './app';
import config from './config/config';
import mongoose from 'mongoose';

mongoose.connect(config.connectionString).then(() => {

    app.listen(config.port, (e) => {
        if (e) {
            console.error('Error starting server:', e);
            process.exit(1);
        } else {
            console.log(`App listening on port ${config.port}`);
        }
    });

}).catch((e) => {
    console.log('Database connection failed!', e);
});


