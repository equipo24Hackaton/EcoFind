import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { ProductsController } from './products/products.controller';
import { UserService } from './user/user.service';
import { ProductsService } from './products/products.service';
import { MongooseModule } from '@nestjs/mongoose'; // Agregar esta importación
import { ConfigModule } from '@nestjs/config'; // Agregar esta importación

@Module({
  imports: [
    // STATIC CONNECTION VERSION
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ecofind'),

    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    ProductsModule,
  ],
  controllers: [UserController, ProductsController],
  providers: [UserService, ProductsService],
})
export class AppModule {}
