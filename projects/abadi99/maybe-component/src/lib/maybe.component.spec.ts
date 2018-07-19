import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaybeComponent } from "./maybe.component";

describe("MaybeComponentComponent", () => {
  let component: MaybeComponent;
  let fixture: ComponentFixture<MaybeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaybeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
