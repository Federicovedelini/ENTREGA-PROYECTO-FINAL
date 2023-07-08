import 'dotenv/config'
import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URL_MONGO)
    console.log('connect DB ok')
} catch ( error ) {
   console.log('Error de conexion a mongodb:' + error)
}

