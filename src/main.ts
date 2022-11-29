import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ENVIRONMENT_DEVELOPMENT } from "./globals";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if(process.env.ENVIRONMENT === ENVIRONMENT_DEVELOPMENT) {
    const config = new DocumentBuilder()
      .setTitle('NestJS API example')
      .addServer(process.env.NESTJS_API_LOCAL_HOST_SERVER_ORIGIN)
      .setDescription('NestJS Typescript NodeJS API example')
      .setVersion('1.0')
      .build();
    app.enableCors({origin: process.env.UI_LOCAL_HOST_SERVER_ORIGIN});
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(3000);
}
bootstrap();
