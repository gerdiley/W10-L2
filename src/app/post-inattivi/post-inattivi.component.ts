import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import * as postSrv from '../services/get-post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.css']
})
export class PostInattiviComponent implements OnInit {

  posts: Post[] = [];

  constructor() {
    postSrv.getPost().then((posts) => this.posts = posts.filter((post) => post.active))
  }

  ngOnInit(): void {

  }
}
