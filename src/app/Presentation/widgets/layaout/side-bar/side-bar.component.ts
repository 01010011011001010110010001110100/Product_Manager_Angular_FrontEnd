import { Component } from '@angular/core';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  // Vars
  public router: routerDecorated;

  constructor(router: routerDecorated) {
    // Initialize
    this.router = router;
  }
}
