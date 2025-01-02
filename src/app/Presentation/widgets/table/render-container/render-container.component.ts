import { Type } from '@angular/core';
import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'render-container',
  imports: [],
  template: `<div #myContainer class="text-danger fw-bold"></div>`,
  styleUrl: './render-container.component.css'
})
export class RenderContainerComponent implements AfterViewInit{
  // Vars
  @Input() componentToRender?: Type<any>;

  // Elements
  @ViewChild('myContainer', {read: ViewContainerRef}) myContainer!: ViewContainerRef;
  
  ngAfterViewInit(): void {
    // Check if there is a component
    if (!this.componentToRender) return;

    // Render the component
    try {
      this.myContainer.createComponent(this.componentToRender);
    } 
    catch {
      this.myContainer.element.nativeElement.appendChild(document.createTextNode('[INVALID COMPONENT]'));
    }
  }
}
