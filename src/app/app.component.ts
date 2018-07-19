import { Component } from "@angular/core";
import { just, Maybe, nothing } from "@abadi199/maybe";
import { TitleComponent } from "./title/title.component";

@Component({
  selector: "app-root",
  template: `
  <maybe [maybe]="this.title">
    <nothing>
      <span style="color:red">No Value</span>
    </nothing> 
    <just>
      <h1>{{this.title.value}}</h1>
    </just>
  </maybe>
 `,
  styles: []
})
export class AppComponent {
  public TitleComponent = TitleComponent;
  public title: Maybe<string> = nothing();
}
