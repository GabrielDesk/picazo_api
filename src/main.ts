import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

export default async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  const port = 3000;

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Picazo Robot ')
    .setDescription('API de controle do robo Picazo')
    .setVersion('1.0')
    .addTag('form')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // await app.listen(port, isIpAdress ? ipAddress : 'localhost');
  await app.listen(port);
}
bootstrap();
