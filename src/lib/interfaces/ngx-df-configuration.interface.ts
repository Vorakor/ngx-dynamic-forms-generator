import { NgxDFFieldGroup } from "./ngx-df-field-definition.interface";
import { Observable } from "rxjs";

export interface NgxDFConfiguration {
  formClass?: string;
  formGroups?: NgxDFFieldGroup[];
  footerDivider?: boolean;
  submitBtnText?: string;
  submitBtnEnabled$?: Observable<boolean>;
  resetBtnText?: string;
  resetBtn?: boolean;
  resetBtnEnabled$?: Observable<boolean>;
}
