import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputcomponentComponent,MatTableModule,FormsModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'health-tracker-app';
}
