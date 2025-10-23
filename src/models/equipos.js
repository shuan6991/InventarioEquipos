import mongoose from "mongoose";


const equipoSchema = new mongoose.Schema({

    activo: {
        type: String,
        required: [true, 'El activo es obligatoria'],
        unique: true,
        trim: true
    },

    marca: {
        type: String,
        required: [true, 'La marca es obligatoria'],
        trim: true
    },

    modelo: {
        type: String,
        required: [true, 'El modelo es obligatoria'],
        trim: true
    },

    serie: {
        type: String,
        required: [true, 'El serie es obligatoria'],
        trim: true
    },

    caracteristicas: {
        disco: {
            type: String,
            required: [true, 'El disco es obligatoria'],
            trim: true
        },

        memoria: {
            type: String,
            required: [true, 'El ram es obligatoria'],
            trim: true
        },

        procesador: {
            type: String,
            required: [true, 'El procesador es obligatoria'],
            trim: true
        }
    },

    software: {
        windows: {
            type: String,
            required: [true, 'La version de windows es obligatoria'],
            trim: true
        },

        office: {
            type: String,
            required: [true, 'La version de office es obligatoria'],
            trim: true
        }
    },
},
{
        timestamps: true,
        versionKey: false
    }

)


export const equipo = mongoose.model('equipo', equipoSchema)