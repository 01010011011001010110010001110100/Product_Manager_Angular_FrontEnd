import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { deleteEntityModal } from '../../DTOS/models/generals/deleteEntityModel';
import * as bootstrap from 'bootstrap';




@Component({
  selector: 'delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent implements OnInit{

  // Vars
  private entityToDeleteModel: deleteEntityModal | null;

  // Elements
  private modalElement: HTMLElement | null;
  private nameEntityElement: HTMLElement | null;
  private modalBoostrap: bootstrap.Modal | null;

  // Events
  @Output() confirmEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { 
    // Initialize
    this.entityToDeleteModel = null;
    this.nameEntityElement = null;
    this.modalElement = null;
    this.modalBoostrap = null;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  private loadElements(): void {
    // Elements
    this.modalElement = document.getElementById('deleteModal');
    this.nameEntityElement = document.getElementById('nameEntity');
    this.modalBoostrap = new bootstrap.Modal(this.modalElement!);
  }

  public openModel(params: any): void {
    
    // Set name
    if (this.nameEntityElement) this.nameEntityElement.textContent = (params as deleteEntityModal).name;

    this.modalBoostrap?.show();
  }

  public closeModel(): void {
    this.modalBoostrap?.hide();
  }

  public confirm(): void {
    if (this.entityToDeleteModel === null) return;
    this.confirmEvent.emit(this.entityToDeleteModel.documentId);
  }

  // ngOnInit(): void {
  //   this.loadDataInModal();
  // }

  // private loadDataInModal(): void {
  //   // Elements
  //   this.modal = document.getElementById('deleteModal');


  //   //Load Model Data
  //   this.modal?.addEventListener('show.bs.modal', (event: any) => {

  //     // Elements
  //     const nameEntity: Element | null = document.getElementById('nameEntity');
  //     var buttonTriggeredModal: Element | null = event.relatedTarget;

  //     // Get parameters
  //     const parameters = JSON.parse(buttonTriggeredModal?.getAttribute('data-bs-parameters') ?? '');
      
  //     // Fill modal
  //     if (nameEntity) nameEntity.textContent = parameters.name;

  //     // Fill model
  //     this.entityToDeleteModel = objectHelper.mapMatchingProperties(new deleteEntityModal(), parameters);
  //   });
  // }
}
