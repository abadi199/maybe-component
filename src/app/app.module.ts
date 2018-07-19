import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaybeModule } from "@abadi99/maybe-component";
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [AppComponent, TitleComponent],
  imports: [BrowserModule, MaybeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
