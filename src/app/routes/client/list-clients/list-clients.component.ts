import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientModel } from '../../../DTOS/models/clients/clientModel';
import { clientService } from '../../../services/clientService';

@Component({
  selector: 'app-list-clients',
  imports: [
    RouterLink
  ],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {
    public clients: clientModel[];
  
    constructor(private service: clientService) {
    // Initialize variables
    this.clients = [];
  
    // Fill with productz
    service.getAllModelFiltered([{property: "isDeleted", value: false}]).subscribe((clients) => {
      this.clients = clients;
    });
    }
}
