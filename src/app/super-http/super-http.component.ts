import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
@Component({
  selector: "app-super-http",
  templateUrl: "./super-http.component.html",
  styleUrls: ["./super-http.component.scss"],
})
export class SuperHttpComponent implements OnInit {
  constructor(private service: PostService) {}
  posts: any;
  ngOnInit() {
    this.service.getAll().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        alert(error);
      }
    );
  }
  createPost(post) {
    this.service.createPost(post).subscribe((response) => {
      // post["id"] = response["id"];
      this.posts.splice(0, 0, post);
    });
  }
  updatedPost(post) {
    this.service.updatePost(post).subscribe((response) => {
      console.log("post updated");
    });
  }
  deletePost(post) {
    this.service.deletePost("").subscribe(
      (response) => {
        console.log(response);

        console.log("deleted successful");
        this.posts.splice(this.posts.indexOf(post), 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          console.log("this post is already deleted");
          return;
        }
        console.log("generic error");
      }
    );
  }

  // createPost(input: HTMLInputElement) {
  //   let post = { title: input.value };
  //   input.value = "";

  //   this.service.create(post).subscribe(
  //     (newPost) => {
  //       post["id"] = newPost.id;
  //       this.posts.splice(0, 0, post);
  //     },
  //     (error: AppError) => {
  //       if (error instanceof BadInput) {
  //         // this.form.setErrors(error.originalError);
  //       } else throw error;
  //     }
  //   );
  // }

  // updatePost(post) {
  //   this.service.update(post).subscribe((updatedPost) => {
  //     console.log(updatedPost);
  //   });
  // }

  // deletePost(post) {
  //   this.service.delete(post.id).subscribe(
  //     () => {
  //       let index = this.posts.indexOf(post);
  //       this.posts.splice(index, 1);
  //     },
  //     (error: AppError) => {
  //       if (error instanceof NotFoundError)
  //         alert("This post has already been deleted.");
  //       else throw error;
  //     }
  //   );
  // }
}
