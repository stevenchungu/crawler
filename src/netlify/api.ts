const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const { AppModule } = require('./src/app.module');
const express = require('express');
const serverless = require('netlify-lambda');

const bootstrap = async () => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()),
  );

  // Optional: Set up any additional configuration or middleware here

  await app.init();

  return app.getHttpAdapter().getInstance();
};

// Lambda function handler
module.exports.handler = serverless(bootstrap());
