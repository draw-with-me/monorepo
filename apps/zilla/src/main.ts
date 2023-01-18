import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';
import { stringify } from 'yaml';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Zilla App')
    .setDescription(
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    )
    .setVersion(configService.get('VERSION'))
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  const yamlDocument = stringify(document);
  const documentPath = path.join(__dirname, 'assets', 'docs', 'swagger.yml');
  fs.writeFile(documentPath, yamlDocument, () => {
    Logger.log(`Swagger Documentation written in ${documentPath}`);
  });

  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(`The app is running on port ${port}`);
  Logger.log(`Swagger UI available at http://localhost:${port}/swagger`);
  Logger.log('Press CTRL+C to stop the server.');
}

void bootstrap();
