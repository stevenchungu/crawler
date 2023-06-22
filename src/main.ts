import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app.module';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()),
  );
  app.use(cors());
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
