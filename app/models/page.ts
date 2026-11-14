import mongoose, { Schema, models, model } from "mongoose";

const WidgetSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    data: {
        type: Schema.Types.Mixed,
        required: true,
    },
    sortOrder: {
        type: Number,
        default: 0,
    },
});

const PageSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
        },
        publishedAt: {
            type: Date,
            default: null,
        },
        widgets: {
            type: [WidgetSchema],
            default: [],
        },
    },
    {
        timestamps: true,
    }
)

const Page = models.Page || model("Page", PageSchema)

export default Page;