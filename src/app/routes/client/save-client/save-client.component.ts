import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { clientService } from '../../../services/clientService';
import { createClientModel } from '../../../DTOS/models/clients/createClientModel';
import { editClientModel } from '../../../DTOS/models/clients/editClientModel';
import { objectHelper } from '../../../helpers/objectHelper';
import { createClientRequest } from '../../../DTOS/request/client/createClientRequest';
import { editClientRequest } from '../../../DTOS/request/client/editClientRequest';

@Component({
  selector: 'app-save-client',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './save-client.component.html',
  styleUrl: './save-client.component.css'
})
export class SaveClientComponent implements OnInit{

    // Vars
    public model: any;
    public editMode: boolean;


    constructor(
      private clientService: clientService,
      private router: Router,
      private route: ActivatedRoute
    ) 
    {
      // Initialize vars
      this.model = new createClientModel();
      this.editMode = false;
    }


    ngOnInit(): void {
      // create and fill lists
      this.route.queryParams.subscribe((params) => {
  
        // Id client
        let clientId = params['Id'];
  
        // Set if the save goes in edit mode
        this.editMode = clientId != undefined;
  
        // When list were loaded, load the model
        if (this.editMode) 
        {
          this.clientService.getEditModel(clientId).subscribe((model: editClientModel | undefined) => {
            if (model) {
              this.model = model;
              this.model.documentId = clientId;
            }
          });
        } 
      });
    }


    // Create the client and go to the lists
    public create(): void {
      this.clientService.add(objectHelper.mapMatchingProperties(new createClientRequest(), this.model)).subscribe(() => {
        this.router.navigate(['/list-clients']);
      });
    }
  
    // Edit the product
    public update(): void {
      this.clientService.update(objectHelper.mapMatchingProperties(new editClientRequest(), this.model), this.model.documentId).subscribe(() => {
        this.router.navigate(['/list-clients']);
      });
    }
}
