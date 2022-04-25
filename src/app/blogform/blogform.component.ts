import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  categories=['Technical','Personal','Nature'];
  constructor(private service: BlogService) {}

  ngOnInit() {
  }
  insert(blog: any)
  {
    //alert (blog.title)
    console.log("inserting")
    this.service.addBlog(blog);
  }
}
