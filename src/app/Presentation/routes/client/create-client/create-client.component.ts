import { Component } from '@angular/core';
import { createClientModel } from '../../../../Core/DTOS/models/clients/createClientModel';
import { clientService } from '../../../../Core/services/clientService';
import { Router, RouterLink } from '@angular/router';
import { objectHelper } from '../../../../Core/helpers/others/objectHelper';
import { createClientRequest } from '../../../../Core/DTOS/request/client/createClientRequest';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {
  // Vars
  public model: createClientModel;

  // Services
  private clientService: clientService;

  // Routes vars
  private router: Router;


  constructor(
    clientService: clientService,
    router: Router
  ) 
  {
    // Initialize vars
    this.model = new createClientModel();
    this.clientService = clientService;
    this.router = router;
  }


  // Create the client and go to the list-client
  public create(): void {
    this.clientService.add(
      objectHelper.mapMatchingProperties(new createClientRequest(), this.model)
    )
    .subscribe(() => this.router.navigate(['/list-clients']));
  }

}
