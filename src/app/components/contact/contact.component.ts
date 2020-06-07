import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts = [
    {
      link: 'https://www.instagram.com/wesleyxbz',
      path: './assets/icon/instagram.svg',
      alt: 'instagram'
    },
    {
      link: 'https://github.com/WesleyxBZ',
      path: './assets/icon/github.svg',
      alt: 'github'
    },
    {
      link: 'https://www.linkedin.com/in/wesley-belizario-824127162/',
      path: './assets/icon/linkedIn.svg',
      alt: 'linkedIn'
    },
    {
      link: 'https://steamcommunity.com/id/wesleyxbz',
      path: './assets/icon/steam.svg',
      alt: 'steam'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
