import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule,
    RouterModule.register([
      {
        path: 'posts',
        module: PostsModule,
      },
    ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
