import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nothing",
  template: `
   <ng-content></ng-content>
  `,
  styles: []
})
export class NothingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
