import {
  Component,
  OnInit,
  Input,
  Type,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { Maybe, nothing, MaybeKind } from "@abadi199/maybe";

@Component({
  selector: "maybe",
  template: `
  <ng-content *ngIf="this.maybe.isNothing()" select="nothing"></ng-content>
  <ng-content *ngIf="this.maybe.isJust()" select="just"></ng-content>
 `,
  styles: []
})
export class MaybeComponent<T> implements OnInit {
  MaybeKind = MaybeKind;
  @Input() maybe: Maybe<T> = nothing();
  constructor() {}

  ngOnInit() {}
}
