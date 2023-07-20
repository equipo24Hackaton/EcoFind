import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  image_url: string;
  name: string;
  description: string;
  ubication: string;
  price: number;
  created_by: string;
  category: boolean;
}
