import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itensMenu = [
    {
      title: 'Sobre mim',
      link: '#sobre-mim'
    },
    {
      title: 'Galeria',
      link: '#galeria'
    },
    {
      title: 'Contato',
      link: '#contato'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
