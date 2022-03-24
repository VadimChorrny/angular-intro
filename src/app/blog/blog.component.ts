import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: Blog = {
    title: "Travel to berlin",
    description: "Thats perfect trip to germany. I was in Berlin in 03/03/2022 and thats was really beatiful city for developers and just people.",
    date: new Date(Date.now())
  }

  constructor() { }
  

  ngOnInit(): void {
  }

}
