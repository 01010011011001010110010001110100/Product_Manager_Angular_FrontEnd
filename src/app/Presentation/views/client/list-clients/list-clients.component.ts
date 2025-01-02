import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientModel } from '../../../../Core/DTOS/models/clients/clientModel';
import { clientService } from '../../../../Core/services/clientService';
import { deleteEntityModel } from '../../../../Core/DTOS/models/generals/deleteEntityModel';
import { simulateDeleteClientRequest } from '../../../../Core/DTOS/request/client/simulateDeleteClientequest';
import { routerDecorated } from '../../../../Core/helpers/extensionClasses/routerDecorated';
import { objectHelper } from '../../../../Core/helpers/others/objectHelper';
import { enumProviderService } from '../../../../Core/services/enumProviderService';
import { DeleteModalComponent } from '../../../widgets/modal/delete-modal/delete-modal.component';
import { DynamicTableComponent } from '../../../widgets/table/dinamic-table/dynamic-table.component';

@Component({
  selector: 'list-clients',
  imports: [
    RouterLink,
    DeleteModalComponent,
    DynamicTableComponent
  ],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent implements OnInit {

  // Vars
  public clients: clientModel[];

  // Routers
  public router: routerDecorated;

  // Services
  private clientService: clientService
  public enumProviderService: enumProviderService;

  // Components
  @ViewChild(DeleteModalComponent) private deleteModal!: DeleteModalComponent;
  
  constructor(
    clientService: clientService,
    enumProviderService: enumProviderService,
    router: routerDecorated
  ) {
    // Initialize variables
    this.clients = [];
    this.clientService = clientService;
    this.enumProviderService = enumProviderService;
    this.router = router;
  }

  ngOnInit(): void {
    this.loadClients();
  }

  // Load clients
  private loadClients(): void {
    this.clientService.getAllModelFiltered([{property: "isDeleted", value: false}]).subscribe((clients) => {
      this.clients = clients;
    });
  }

  // Delete modal
  public openDeleteModal(clientModel: clientModel): void{
    this.deleteModal.openModal(objectHelper.mapMatchingProperties(new deleteEntityModel(), clientModel));
  }

  // Delete the client
  public deleteClient(documentId: string): void {
    this.clientService.simulateDelete(new simulateDeleteClientRequest(), documentId).subscribe(() => {
      this.loadClients();
    });
  }
}
