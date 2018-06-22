import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{fun()}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  fun(){var name="marvellous";
  return [name.length,name.toUpperCase()]}  
}
