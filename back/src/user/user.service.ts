import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import user from '../../data/user.json';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  user: any;
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

  private readonly product: User[] = user;

  create(createUserDto: CreateUserDto) {
    const id = this._idGenerator();
    const newUser: User = {
      _id: id,
      ...createUserDto,
      favoriteProducts: [],
    };

    user.push(newUser);
    return user.find((e) => e._id === id);
  }

  findAll() {
    return user;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
