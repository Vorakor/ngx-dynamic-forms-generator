import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpxDynamicFormsComponent } from './npx-dynamic-forms.component';

describe('NpxDynamicFormsComponent', () => {
  let component: NpxDynamicFormsComponent;
  let fixture: ComponentFixture<NpxDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpxDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpxDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
