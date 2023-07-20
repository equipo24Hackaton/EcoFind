import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import product from '../../data/product.json';
import { CreateProductDto } from './dto/create-product.dto';
// import { Product } from './entities/product.entity';
// import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/products.schema';

@Injectable()
export class ProductsService {
  [x: string]: any;
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

  // private readonly product: Product[] = this.product;

  create(createProductDto: CreateProductDto) {
    const id = this._idGenerator();
    const newProduct: Product = {
      _id: id,
      ...createProductDto,
      category: true,
      image_url: '',
      date: '',
    };
    if (typeof createProductDto.price !== 'number')
      throw new InternalServerErrorException();

    this.product.push(newProduct);
    return this.products.find((e: { _id: string }) => e._id === id);
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((element: { _id: string }) => element._id === id);
  }

  // update(id: string, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }

  // // Busquedas
  // searchByDescription(description: string): Product[] {
  //   // Lógica para buscar productos por características
  //   // Ejemplo: Filtrar los productos que coincidan con las características proporcionadas
  //   return this.product.filter((product) => {
  //     // Suponiendo que las características se encuentran en una propiedad llamada 'characteristics'
  //     return product.description.includes(description);
  //   });
  // }

  // searchByText(searchText: string): Product[] {
  //   // Lógica para buscar productos por texto libre
  //   // Ejemplo: Filtrar los productos que contengan el texto proporcionado en el nombre o descripción
  //   return this.product.filter((product) => {
  //     return (
  //       product.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //       product.description.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //   });
  // }

  // searchByUbication(ubication: string): Product[] {
  //   // Lógica para buscar productos por zona geográfica
  //   // Ejemplo: Filtrar los productos que se encuentren en la ubicación proporcionada
  //   return this.product.filter((product) => {
  //     // Suponiendo que la ubicación se encuentre en una propiedad llamada 'ubication'
  //     return product.ubication.toLowerCase().includes(ubication.toLowerCase());
  //   });
  // }
}
