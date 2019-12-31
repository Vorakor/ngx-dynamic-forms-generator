import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxDynamicFormInputComponent } from "./ngx-dynamic-form-input/ngx-dynamic-form-input.component";
import { NgxDynamicFormsComponent } from "./ngx-dynamic-forms/ngx-dynamic-forms.component";

@NgModule({
  declarations: [NgxDynamicFormsComponent],
  imports: [],
  exports: [NgxDynamicFormsComponent]
})
export class NgxDynamicFormsModule {}
