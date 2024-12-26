import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent implements AfterViewInit{

  ngAfterViewInit(): void {

    // Elements
    const deleteModal: HTMLElement | null = document.getElementById('deleteModal');
    const nameEntity: HTMLElement | null = document.getElementById('nameEntity');
    var buttonTriggeredModal: HTMLElement | null = null;

    // Loadn name
    deleteModal?.addEventListener('show.bs.modal', (event: any) => {

      // Set the button that triggered the modal
      buttonTriggeredModal = event.relatedTarget;

      // Get the parameters from the button
      const parameters = JSON.parse(buttonTriggeredModal?.getAttribute('data-bs-parameters') ?? '');
      
      // Set the
      if (nameEntity) nameEntity.textContent = parameters.name;
    });
  }

}
