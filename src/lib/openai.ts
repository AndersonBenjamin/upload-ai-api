import 'dotenv/config'
import { OpenAI } from 'openai'

export const openai = new OpenAI({
    //apiKey: process.env.OPENAI_KEY
    apiKey: "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"
})