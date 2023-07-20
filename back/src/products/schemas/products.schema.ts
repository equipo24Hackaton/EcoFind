import { HydratedDocument } from 'mongoose';
// import { Product } from '../entities/product.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image_url: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false })
  ubication?: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  created_by: string;

  @Prop({ required: false })
  category?: boolean;

  @Prop({ required: true })
  date: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
