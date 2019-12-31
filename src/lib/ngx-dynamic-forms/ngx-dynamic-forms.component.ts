import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import * as _ from "lodash";
import {
  NgxDFFieldDefinition,
  NgxDFFieldGroup,
  NgxDFConfiguration
} from "../interfaces";

@Component({
  selector: "ngx-dynamic-forms",
  templateUrl: "./ngx-dynamic-form.component.html",
  styleUrls: ["./ngx-dynamic-form.component.scss"]
})
export class NgxDynamicFormsComponent implements OnInit, OnChanges {
  @Input() fields: NgxDFFieldDefinition[] = [];
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() config: NgxDFConfiguration;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>(null);
  @Output() formReset: EventEmitter<any> = new EventEmitter<any>(null);
  formInputs: NgxDFFieldDefinition[] = [];
  formInline = false;
  formGroups: NgxDFFieldDefinition[];
  minCheckboxWidth = 100;
  maxCheckboxWidth = 100;
  constructor() {}

  ngOnInit() {
    if (this.config.formClass.includes("form-inline")) {
      this.formInline = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fields) {
      this.formInputs = [...changes.fields.currentValue];
      const chk = this.formInputs.filter(
        input => input.type === "checkbox-btn" || input.type === "checkbox"
      )[0];
      if (chk) {
        this.setCheckboxSize();
      }
    }
  }

  getCtrlKey(control, key = ""): string {
    const ctrlName = Object.keys(control.controls)[0];
    if (key) {
      const ctrl = this.formInputs.filter(input => input.name === ctrlName)[0];
      return ctrl[key];
    } else {
      return ctrlName;
    }
  }

  getCtrl(key): AbstractControl {
    return this.formGroup.get(key);
  }

  getField(key) {
    return this.formInputs.filter(input => input.name === key)[0];
  }

  reset() {
    if (this.config.resetBtn && this.config.resetBtnText) {
      this.formReset.emit(this.formGroup.value);
    } else {
      this.formGroup.reset();
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    }
  }

  setCheckboxSize() {
    const checkboxes = this.formInputs.filter(
      input => input.type === "checkbox-btn" || input.type === "checkbox"
    );
    let maxString = "";
    checkboxes.forEach(input => {
      if (maxString.length === 0) {
        maxString = input.label;
      } else if (input.label.length > maxString.length) {
        maxString = input.label;
      }
    });
    const c = document.createElement("canvas");
    const context = c.getContext("2d");
    context.font = "16px Arial";
    this.minCheckboxWidth = Math.ceil(context.measureText(maxString).width);
    this.maxCheckboxWidth = this.minCheckboxWidth + 30;
  }
}
