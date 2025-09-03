import e from 'express';
import app from './app';
import config from './config/config';
import { error } from 'console';
import mongoose from 'mongoose';

mongoose.connect(config.connectionString).then(() => {
    app.listen(config.port, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`App listening on port ${config.port}`);
        }
        
    })
}
).catch((error) => {
    console.log(error);
});



