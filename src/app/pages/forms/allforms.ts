import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./baseform";

@Injectable()
export class AllForm extends BaseForm {

    constructor(protected fb: FormBuilder) {
        super(fb);
    }

    getNinthclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: ['', Validators.required],
            studentfathername: ['', Validators.required],
            studentrollnumber: ['', Validators.required],
            sindhimarks: ['', Validators.required],
            englishmarks: ['', Validators.required],
            islamiatmarks: ['', Validators.required],
            urdumarks: ['', Validators.required],
            computermarks: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']
            

        });

    }
}
