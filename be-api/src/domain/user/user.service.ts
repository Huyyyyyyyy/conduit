import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { BaseService } from 'src/common/service/base.service';

@Injectable()
export class UserService extends BaseService<
  Prisma.UserCreateArgs,
  Prisma.UserUpdateInput
> {
  constructor(databaseService: DatabaseService) {
    const modelName: string = 'User';
    super(databaseService, modelName);
  }

  //register
  async register(data: Prisma.UserCreateInput) {
    const hashedPassword = await this.hashPassword(data.password);

    const newUser: Prisma.UserCreateInput = {
      email: data.email,
      userName: data.userName,
      shortBio: data.shortBio,
      password: hashedPassword,
    };

    return this.create({data: newUser});
  }
  //register

  //hash password
  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  //hash password

  //find by email
  async findOneByEmail(email: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  //find by email
}
