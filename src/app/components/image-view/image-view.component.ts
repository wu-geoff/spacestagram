import { Component, OnInit } from '@angular/core';
import { ApodReturn } from 'src/app/models/apod_return.model';

@Component({
  selector: 'app-image-view',
  inputs: ['image'],
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  image!: ApodReturn;
  liked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //console.log(`liked: ${this.liked}`)
  }

  onLike(): void {
    this.liked = !this.liked;
    //console.log(`liked: ${this.liked}`)
  } 

}
