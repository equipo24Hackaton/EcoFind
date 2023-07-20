import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { ProductSchema } from 'src/products/schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: ProductSchema }]), // Registra el modelo
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
