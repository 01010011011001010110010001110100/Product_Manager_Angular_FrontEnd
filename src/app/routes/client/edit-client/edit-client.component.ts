import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { editClientModel } from '../../../DTOS/models/clients/editClientModel';
import { clientService } from '../../../services/clientService';
import { objectHelper } from '../../../helpers/others/objectHelper';
import { editClientRequest } from '../../../DTOS/request/client/editClientRequest';

@Component({
  selector: 'app-edit-client',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
export class EditClientComponent implements OnInit{
    // Vars
    public model: editClientModel;

    // Services
    private clientService: clientService;

    // Routers vars
    private router: Router;
    private route: ActivatedRoute;

    constructor(
      clientService: clientService,
      router: Router,
      route: ActivatedRoute
    ) 
    {
      // Initialize vars
      this.model = new editClientModel();
      this.clientService = clientService;
      this.router = router;
      this.route = route;
    }


    ngOnInit(): void {
      this.getClientToEdit();
    }


    // Get the client to edit
    private getClientToEdit(): void{
      this.route.queryParams.subscribe((params: any) => {
        const clientId = params['documentId'];

        this.clientService.getEditModel(clientId).subscribe((editModel: editClientModel | undefined) => {
          if (editModel) {
            this.model = editModel;
          }
        });
      });
    }


    // Edit the product
    public update(): void {
      this.clientService.update(
        objectHelper.mapMatchingProperties(new editClientRequest(), this.model), 
        this.model.documentId
      )
      .subscribe(() => this.router.navigate(['/list-clients']));
    }
}
