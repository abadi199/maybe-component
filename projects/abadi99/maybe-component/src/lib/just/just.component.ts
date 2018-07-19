import { Component, OnInit } from "@angular/core";

@Component({
  selector: "just",
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class JustComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
