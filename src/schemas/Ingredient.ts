import { Schema, model, Document } from 'mongoose'

export interface Ingredient extends Document {
	name: string
}

const IngredientSchema = new Schema({
	name: { type: String, required: true }
}, {
	timestamps: true
})

export default model<Ingredient>('Ingredient', IngredientSchema)
