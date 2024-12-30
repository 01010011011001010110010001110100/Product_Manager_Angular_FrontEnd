import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { deleteEntityModel } from '../../../../Core/DTOS/models/generals/deleteEntityModel';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent implements OnInit{

  // Vars
  private isConfirmed: boolean;
  private entityToDeleteModel: deleteEntityModel | null;

  // Elements
  private modalElement: HTMLElement | null;
  private nameEntityElement: HTMLElement | null;
  private modalBoostrap: bootstrap.Modal | null;

  // Events
  @Output() confirmEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { 
    // Initialize
    this.isConfirmed = false;
    this.entityToDeleteModel = null;
    this.nameEntityElement = null;
    this.modalElement = null;
    this.modalBoostrap = null;
  }

  ngOnInit(): void {
    this.loadElements();
    this.addListeners();
  }

  private loadElements(): void {
    // Elements
    this.modalElement = document.getElementById('deleteModal');
    this.nameEntityElement = document.getElementById('nameEntity');
    this.modalBoostrap = new bootstrap.Modal(this.modalElement!);
  }

  private addListeners(): void {
    this.modalElement?.addEventListener('hidden.bs.modal', () => {
      // Emit Confirmation
      if (this.isConfirmed && this.entityToDeleteModel) {
        this.isConfirmed = false;
        this.confirmEvent.emit(this.entityToDeleteModel.documentId);
      }
    });
  }

  public openModal(deleteEntityModel: deleteEntityModel): void {
    // Fill model
    this.entityToDeleteModel = deleteEntityModel;

    // Load name
    if (this.nameEntityElement) {
      this.nameEntityElement.textContent = deleteEntityModel.name;
    }

    // Open Modal
    this.modalBoostrap?.show();
  }

  public closeModal(): void {
    this.modalBoostrap?.hide();
  }

  public confirm(): void {
    this.isConfirmed = true;
    this.closeModal();
  }
}
