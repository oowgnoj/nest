import { Table, Column, Model } from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
export class Dog extends Model<Dog> {
  @Column
  name: string;

  @Column
  breed: string;

  @Column
  age: number;
}
