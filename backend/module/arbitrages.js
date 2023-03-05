import mongoose, { Schema } from 'mongoose'

export const arbitrageSchema = new Schema({
  buy: String,
  sell: String,
  token0: String,
  token1: String,
  buyPrice: Number,
  sellPrice: Number,
  profit: Number,
  created: Date
})

export const ArbitrageModel = mongoose.model('arbitrage', arbitrageSchema)