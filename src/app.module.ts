import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlingModule } from './crawling.module';



@Module({

  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: false,
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    driver: require('mysql2'),

   
  }), 
  CrawlingModule
 
  ],



})
export class AppModule { }


// host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: '',
//     database: 'tsogolo',
//     autoLoadEntities: false,
//     synchronize: true,
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     driver: require('mysql2'),