import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { LoggingInterceptor } from './interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useLogger(app.get(Logger));

  await app.listen(3000);
}
bootstrap();
