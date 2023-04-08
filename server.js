import { app } from './app.js';
import { connectDB } from './utils/database.js';

connectDB();

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`));