import { Schema, model, Document } from 'mongoose'

export interface Step {
	number: number
	title: string
	description: string
}

export interface IngredientInstance {
	ammount: number
	ingredient: Schema.Types.ObjectId
}

export interface Recipe extends Document {
	name: string
	description: string
	time: number
	time_unit: string
	portion: string
	steps: Step[]
	pictures: string[]

	owner: Schema.Types.ObjectId
	tags: Schema.Types.ObjectId[]
	ingredients: IngredientInstance[]
	rates: Schema.Types.ObjectId[]
}

const RecipeSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	time: Number,
	time_unit: String,
	portion: String,
	steps: { type: Array, required: true },
	pictures: { type: Array, required: true },

	owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
	ingredients: Array,
	rates: [{ type: Schema.Types.ObjectId, ref: 'Rate' }]
}, {
	timestamps: true
})

export default model<Recipe>('Recipe', RecipeSchema)
