import { Schema, model } from 'mongoose';
import { IConversiones } from '../types/Conversiones.types';

const conversionesSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        click_id: {
            type: Schema.Types.ObjectId,
            ref: "click"
        }
    }
);

export default model<IConversiones>("conversiones", conversionesSchema);