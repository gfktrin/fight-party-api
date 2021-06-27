import { FightsModule } from './fights/fights.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
    ),
    CharactersModule,
    UsersModule,
    AuthModule,
    FightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
