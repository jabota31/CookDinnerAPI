import { Schema, model, Document } from 'mongoose'

export interface User extends Document {
	email: string
	password: string
	name: string
	birthday?: Date
	gender?: string
	profile_picture: string

	recipes: Schema.Types.ObjectId[]
	follows: Schema.Types.ObjectId[]
	followers: Schema.Types.ObjectId[]
	rates: Schema.Types.ObjectId[]
	likes: Schema.Types.ObjectId[]
}

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	birthday: Date,
	gender: String,
	profile_picture: String,

	recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
	follows: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	rates: [{ type: Schema.Types.ObjectId, ref: 'Rate' }],
	likes: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
}, {
	timestamps: true
})

export default model<User>('User', UserSchema)
