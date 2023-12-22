import { ObjectId, Types } from 'mongoose'

export interface ButtonProps {
  text: string
  url: string
}

export interface BlogItemsType {
  _id: string
  title: string
  img: string
  desc: string
}

export interface PortfolioItemsType {
  id: number
  title: string
  desc: string
  image: string
}
