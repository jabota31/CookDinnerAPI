import { Schema, model, Document } from 'mongoose'

export interface Tag extends Document {
	name: string
}

const TagSchema = new Schema({
	name: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

export default model<Tag>('Tag', TagSchema)
