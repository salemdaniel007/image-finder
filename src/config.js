import dotenv from 'dotenv'

dotenv.config()

const ENV_VARIABLES = {
    APP_ACCESS_KEY: process.env.APP_ACCESS_KEY,
    APP_SECRET: process.env.APP_SECRET
}

export default {
    ENV_VARIABLES
}