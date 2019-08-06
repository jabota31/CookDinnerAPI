import { Schema, model, Document } from 'mongoose'

export interface Rate extends Document {
	favorite: boolean
	grade: number
	recipe: Schema.Types.ObjectId
	user: Schema.Types.ObjectId
}

const RateSchema = new Schema({
	favorite: { type: Boolean, required: true },
	grade: Number,
	recipe: { type: Schema.Types.ObjectId, ref: 'Recipe', required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
	timestamps: true
})
export default model<Rate>('Rate', RateSchema)
