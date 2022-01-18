import { Component, OnInit } from '@angular/core';
import { ApodReturn } from 'src/app/models/apod_return.model';
import { ApodService } from "src/app/services/apod.service";

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.css']
})
export class ImageTableComponent implements OnInit {
  images: ApodReturn[] = [];
  dataLoaded: boolean = false;

  constructor(private apod: ApodService) { }

  ngOnInit(): void {
    this.apod.getAPODs().subscribe((images: ApodReturn[]) => {
      //console.log(images)
      this.images = images.filter((i) => {
        return i.media_type === 'image';
      });
      this.dataLoaded = true;
    });
  }

}
