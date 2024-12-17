import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { deleteClientModel } from '../../../DTOS/models/clients/deleteClientModel';
import { clientService } from '../../../services/clientService';
import { simulateDeleteClientRequest } from '../../../DTOS/request/client/simulateDeleteClientequest';

@Component({
  selector: 'app-delete-client',
  imports: [
    RouterLink
  ],
  templateUrl: './delete-client.component.html',
  styleUrl: './delete-client.component.css'
})
export class DeleteClientComponent implements OnInit{

  // Variables
  public model: deleteClientModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: clientService
  ) 
  {
    this.model = new deleteClientModel();
  }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        // Load parameters in the model
        this.model.documentId = params['Id'];
        this.model.name = params['Name'];
    });
  }


  // Delete the client
  public delete(): void {
    this.clientService.simulateDelete(new simulateDeleteClientRequest(), this.model.documentId).subscribe(() => {
      this.router.navigate(['/list-clients']);
    });
  }

}
