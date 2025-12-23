import dotenv from 'dotenv';
import app from './app.js';
import { connect } from './src/config/db.config.js';

console.log("Starting server initialization");

dotenv.config();

const PORT = process.env.PORT || 4300;

const startServer = () => {
    console.log("Starting Server");
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    }).on("error", (error) => {
        console.error("Error starting server:", error);
        process.exit(1);
    });
};

const init = async () => {
    console.log("Initializing application...");
    try {
        await connect();
        startServer();
    } catch (_) {
        console.error("Failed to connect to the database");
        process.exit(1);
    }
};

init().catch(_ => {
    console.error("Fatal error during initialization: ", _);
    process.exit(1);
});