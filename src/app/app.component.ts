import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Presentation/widgets/layaout/header/header.component";
import { FooterComponent } from "./Presentation/widgets/layaout/footer/footer.component";
import { SideBarComponent } from './Presentation/widgets/layaout/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
