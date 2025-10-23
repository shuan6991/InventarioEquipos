import mongoose from "mongoose";


const usuarioSchema = new mongoose.Schema({
    nombreCompleto: {
        type:String,
        required:[true, 'El nombre completo del usuario es requerido'],
        trim: true
    },

    correo:{
        type:String,
        required: true,
        unique: [true, "El correo es obligartorio"],
        trim: true
    },

    password:{
        type: String,
        required: [true, "La contraseña es obligatoria"],
        trim: true
    }
},

{
    timestamps:true,
    versionKey:false
}

)

export const usuario = mongoose.model('user', usuarioSchema)