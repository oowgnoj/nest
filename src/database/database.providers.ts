import { Sequelize } from 'sequelize-typescript';
import * as mysql from 'mysql2';
import { databaseConfig } from './database.config';
import { Dog } from 'src/dog/model/dog.model';
import { User } from 'src/user/model/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      try {
        const sequelize = new Sequelize(databaseConfig);
        sequelize.addModels([Dog, User]);
        await sequelize.sync();
        return sequelize;
      } catch (error) {
        // IF DATABASE NOT EXIST, CREATE NEW DATABASE
        const connection = mysql.createConnection({
          host: databaseConfig.host,
          user: databaseConfig.username,
        });
        connection.query('CREATE DATABASE memo');
        return databaseProviders[0].useFactory();
      }
    },
  },
];
