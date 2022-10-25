import { Component, OnInit } from '@angular/core';

import { BreedServiceService } from '../../services/breed-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  breeds: any;
  photos: any;
  selectedBreed: string;

  constructor(private breedService: BreedServiceService) {}

  ngOnInit(): void {
    this.breedService.getBreed().subscribe((breeds) => {
      this.breeds = breeds.message;
    });
    this.breedService.getRandomPhoto().subscribe((photos) => {
      this.photos = photos.message;
    })

  }

  getWiki(event: Event) {
    const selectedBreed = (event.target as HTMLElement).innerHTML;
    const wikiUrl = "https://en.wikipedia.org/wiki/"+selectedBreed.trim();
    const anchor = document.querySelector('a');
    anchor.innerText = selectedBreed;
    anchor.setAttribute('href', wikiUrl);
  }

  getPhoto(event: Event): void {
    const selectedBreed = (event.target as HTMLElement).innerHTML;
    this.breedService.getPhoto(selectedBreed).subscribe((photos) => {
      this.photos = photos.message;
    });
  }
}
