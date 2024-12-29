import { Component } from '@angular/core';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'headerComp',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Routers
  public router: routerDecorated;

  constructor(router: routerDecorated) { 
    // Initialize variables
    this.router = router;
  }
}
