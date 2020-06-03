import {Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i-wesley';

  constructor() {

    // JS para animação do scroll
    $(document).ready(() => {
      $('.scroll').click(function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 2000);
      });
    });

    // JS para expansão de menu lateral
    $(document).ready(() => {
      $('#dismiss, .overlay').on('click', () => {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
      });
      $('#sidebarCollapse').on('click', () => {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    });

  }

}
