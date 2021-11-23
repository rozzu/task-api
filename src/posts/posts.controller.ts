import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Post } from './post.interface';
import { PostsService} from './posts.service';
@Controller()
export class PostsController {

    constructor(private postsService: PostsService) {}
    @Get(':id')
    post(@Param() params): Post {
        console.log(params.id);
       const post =  this.postsService.findPost(+(params.id));
        if (post) {
            return post;
        }
        throw new NotFoundException(); ;
    }

    @Get()
    posts(): Post[] {
        return this.postsService.findAllPosts();
    }
}
