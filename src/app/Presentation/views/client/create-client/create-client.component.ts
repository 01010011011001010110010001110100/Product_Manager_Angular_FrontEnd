import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateClientFormComponent } from '../../../components/client/form/create-client-form/create-client-form.component';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';

@Component({
  selector: 'app-create-client',
  imports: [
    CreateClientFormComponent,
    RouterLink
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  // Routes vars
  public router: routerDecorated;

  constructor(router: routerDecorated) 
  {
    // Initialize vars
    this.router = router;
  }
}
