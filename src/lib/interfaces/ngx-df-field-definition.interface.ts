export interface NgxDFFieldDefinition {
  name: string;
  type:
    | "text"
    | "password"
    | "textarea"
    | "select"
    | "checkbox"
    | "checkbox-btn";
  label?: string;
  focus?: boolean;
  placeholder?: string;
  ctrlValidators?: any[];
  ctrlAsyncValidators?: any[];
  optional?: boolean;
  class?: string;
  value?: any | any[];
  options?: { value: any; label: string }[];
  disabled?: boolean;
  multiple?: boolean;
  selected?: string | boolean;
  errorMap?: { [key: string]: string };
  updateOn?: "blur" | "change" | "submit";
  id?: number | string;
  showValidated?: boolean;
}

export interface NgxDFFieldGroup {
  name: string;
  fields: string[];
}

export const generateNgxDFFieldDefinition = (): NgxDFFieldDefinition => ({
  name: "default",
  type: "text",
  label: "default",
  ctrlValidators: [],
  ctrlAsyncValidators: [],
  errorMap: { error: "default" }
});
