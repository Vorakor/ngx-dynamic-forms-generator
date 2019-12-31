import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxDynamicFormInputComponent } from "./ngx-dynamic-form-input.component";

describe("NgxDynamicFormInputComponent", () => {
  let component: NgxDynamicFormInputComponent;
  let fixture: ComponentFixture<NgxDynamicFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDynamicFormInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
