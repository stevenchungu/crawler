const { NestFactory } = require('@nestjs/core');
const { CrawlingModule } = require('./dist/crawling.module');

async function bootstrap() {
  const app = await NestFactory.create(CrawlingModule);
  await app.init();
  return app.getHttpAdapter().getInstance();
}

module.exports.handler = async (event, context) => {
  const app = await bootstrap();
  const result = await app(event, context);
  return result;
};
