import { Injectable } from "@angular/core";
import { HttpApiService } from "./http-api.service";
import { BASE_URL } from "../shared/constants/http.constant";
@Injectable()
export class PostService {
  constructor(private http: HttpApiService) {}

  getPosts() {
    return this.http.get(BASE_URL);
  }
  createPost(post: any) {
    return this.http.post(BASE_URL, JSON.stringify(post));
  }
  updatePost(post: any) {
    return this.http.patch(`${BASE_URL}/${post.id}`, JSON.stringify(post));
  }
  deletePost(id: any) {
    return this.http.delete(BASE_URL + "/" + id);
  }
  getAll() {
    return this.http.get(BASE_URL);
  }
}
