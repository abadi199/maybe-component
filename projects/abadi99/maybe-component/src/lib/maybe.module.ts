import { NgModule } from "@angular/core";
import { MaybeComponent } from "./maybe.component";
import { JustComponent } from "./just/just.component";
import { NothingComponent } from "./nothing/nothing.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [MaybeComponent, JustComponent, NothingComponent],
  exports: [MaybeComponent, JustComponent, NothingComponent]
})
export class MaybeModule {}
