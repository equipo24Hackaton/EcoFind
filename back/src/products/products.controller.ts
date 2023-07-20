import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post() //crear product
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get() //mostrar todos los productos
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id') //find by id
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  // // Busquedas
  // @Get()
  // searchProducts(
  //   @Query('description') description: string, // Búsqueda por características
  //   @Query('text') searchText: string, // Búsqueda por texto libre
  //   @Query('ubication') ubication: string, // Búsqueda por zona geográfica
  // ) {
  //   if (description) {
  //     // Lógica para buscar productos por características
  //     return this.productsService.searchByDescription(description);
  //   }

  //   if (searchText) {
  //     // Lógica para buscar productos por texto libre
  //     return this.productsService.searchByText(searchText);
  //   }

  //   if (ubication) {
  //     // Lógica para buscar productos por zona geográfica
  //     return this.productsService.searchByUbication(ubication);
  //   }

  //   // Si no se proporciona ningún parámetro de búsqueda válido, devuelve todos los productos
  //   return this.productsService.findAll();
  // }
}
