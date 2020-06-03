import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = [
    {
      title: 'Sem medo - Mahmundi',
      path: './assets/img/gallery/1.jpg',
      spotifyMusic: 'https://open.spotify.com/track/31YDFOH4f9fOhF0CGWEFds?si=mHevpPPWSv-Ikz989EH7sA'
    },
    {
      title: 'Lights - Ellie Goulding',
      path: './assets/img/gallery/2.jpg',
      spotifyMusic: 'https://open.spotify.com/track/5aTsxlQlq0vIedDWZoqMWN?si=LBUJxJRoRgiwehXtG4tfaw'
    },
    {
      title: 'King - Years & Years',
      path: './assets/img/gallery/3.jpg',
      spotifyMusic: 'https://open.spotify.com/track/3AeicLnm55RqcXGBKYQolM?si=-X6e11REQ-OhXjTTMv--iQ'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
