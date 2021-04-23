import dotenv from 'dotenv';

dotenv.config();

// console.log("process.env.DATABASE_URL : ", process.env.DATABASE_URL)
// console.log("process.env.PORT : ", process.env.PORT)
// console.log("process.env.NODE_ENV : ", process.env.NODE_ENV)

export default {
    database_url: process.env.DATABASE_URL,
    test_database_url: process.env.TEST_DATABASE_URL,
    secret: process.env.SECRET,
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV,
}