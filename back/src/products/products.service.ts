import { Injectable, InternalServerErrorException } from '@nestjs/common';
import product from '../../data/product.json';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  _rndm(arr: any[]) {
    return Math.floor(Math.random() * arr.length);
  }
  _idGenerator() {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (
      timestamp +
      'xxxxxxxxxxxxxxxx'
        .replace(/[x]/g, function () {
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase()
    );
  }

  private readonly product: Product[] = product;

  create(createProductDto: CreateProductDto) {
    const id = this._idGenerator();
    const newProduct: Product = {
      _id: id,
      ...createProductDto,
      image_url: '',
      date: '',
      __v: 0,
    };
    if (typeof createProductDto.price !== 'number')
      throw new InternalServerErrorException();

    this.product.push(newProduct);
    return this.product.find((e) => e._id === id);
  }

  findAll() {
    return product;
  }

  findOne(id: string) {
    return product.find((element) => element._id === id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
