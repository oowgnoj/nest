import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/constant';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async findOne(email): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { email: email },
      raw: true,
    });
    if (!user) {
      throw new NotFoundException(`user with id ${email} not found`);
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async create(payload): Promise<String> {
    await this.userRepository.create(payload);
    return 'OK';
  }
}
