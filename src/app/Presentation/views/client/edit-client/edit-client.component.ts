import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { EditClientFormComponent } from '../../../components/client/form/edit-client-form/edit-client-form.component';

@Component({
  selector: 'app-edit-client',
  imports: [
    EditClientFormComponent,
    RouterLink
],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
export class EditClientComponent {
    // Routers vars
    public router: routerDecorated;

    constructor(router: routerDecorated) 
    {
      // Initialize vars
      this.router = router;
    }
}
