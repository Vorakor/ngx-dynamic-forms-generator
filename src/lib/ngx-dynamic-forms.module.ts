import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDynamicFormInputComponent } from './ngx-dynamic-form-input/ngx-dynamic-form-input.component';
import { NgxDynamicFormsComponent } from './ngx-dynamic-forms/ngx-dynamic-forms.component';

@NgModule({
    declarations: [NgxDynamicFormsComponent, NgxDynamicFormInputComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [NgxDynamicFormsComponent],
})
export class NgxDynamicFormsModule {}
