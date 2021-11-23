import { Injectable } from '@nestjs/common';
import PostData from './postData';
import {Post} from './post.interface';
@Injectable()
export class PostsService {

    findPost(id: number): Post {
        return PostData.find(x => x.id === id) || null;
    } 

    findAllPosts(): Post[] {
        return [...PostData];
    }
}
