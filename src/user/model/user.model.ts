import { Table, Column, Model } from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
export class User extends Model<User> {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  username: string;
}
