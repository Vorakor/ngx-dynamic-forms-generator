import { Component, OnInit, Input } from "@angular/core";
import {
  NgxDFFieldDefinition,
  generateNgxDFFieldDefinition
} from "../interfaces";
import { FormGroup, FormControl, AbstractControlOptions } from "@angular/forms";

@Component({
  selector: "dynamic-form-input",
  templateUrl: "./dynamic-form-input.component.html",
  styleUrls: ["./dynamic-form-input.component.scss"]
})
export class NgxDynamicFormInputComponent implements OnInit {
  @Input()
  field: NgxDFFieldDefinition = generateNgxDFFieldDefinition();
  @Input() form: FormGroup = new FormGroup({});
  @Input() formInline = false;
  formControl: FormControl;
  constructor() {}

  ngOnInit() {
    const options: AbstractControlOptions = {
      validators: this.field.ctrlValidators,
      asyncValidators: this.field.ctrlAsyncValidators
    };
    if (this.field.updateOn) {
      options.updateOn = this.field.updateOn;
    }
    this.formControl = new FormControl(this.field.value || "", options);
    this.form.addControl(this.field.name, this.formControl);
  }

  getFirstError() {
    if (this.formControl.errors) {
      const errorKey = Object.keys(this.formControl.errors).pop();
      if (!errorKey) {
        console.warn(
          `No error message for '${errorKey}'.  Please put a message in for that error.`
        );
      }
      return this.field.errorMap[errorKey] || errorKey;
    }
  }
}
