import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose'; // Agregar esta importación
import { ConfigModule, ConfigService } from '@nestjs/config'; // Agregar esta importación
import { config } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
config();

@Module({
  imports: [
    // STATIC CONNECTION VERSION
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/ecofind'),

    // DYNAMIC CONNECTION VERSION
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>(
          'DB_HOST',
        )}:${configService.get<string>('DB_PORT')}/${configService.get<string>(
          'DB_NAME',
        )}`,
      }),
      inject: [ConfigService],
    }),

    // DYNAMIC DOCKER VERSION FOR MAC AN LINUX, ¿WINDOWS?
    // MongooseModule.forRootAsync({
    // 	imports: [ ConfigModule ],
    // 	useFactory: async (configService: ConfigService) => ({
    // 		uri: `mongodb://${configService.get<string>('DOCKER_DB_HOST')}:${configService.get<string>('DB_PORT')}/${configService.get<string>('DB_NAME')}`
    // 	}),
    // 	inject: [ ConfigService ],
    // }),

    // STATIC DOCKER VERSION FOR MAC AN LINUX, ¿WINDOWS?
    // MongooseModule.forRoot('mongodb://host.docker.internal:27017/uknow'), DOCKER VERSION FOR MAC AND LINUX
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
