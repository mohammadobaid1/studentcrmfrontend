import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./baseform";

@Injectable()
export class AllForm extends BaseForm {

    constructor(protected fb: FormBuilder) {
        super(fb);
    }

    getNinthcomputerclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: ['', Validators.required],
            fathername: ['', Validators.required],
            enrollmentnumber: ['', Validators.required],
            dateofbirth: [''],
            yearofappearing: [''],
            englishmarks: ['', Validators.required],
            sindhimarks: ['', Validators.required],
            pakistanstudiesmark: ['', Validators.required],
            chemistrytheorymarks: ['', Validators.required],
            chemistrypracticalmarks: ['', Validators.required],
            computertheorymarks: ['', Validators.required],
            computerpracticalmarks: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']
            

        });

    }


        getNinthbioclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: ['', Validators.required],
            fathername: ['', Validators.required],
            enrollmentnumber: ['', Validators.required],
            dateofbirth: [''],
            yearofappearing: [''],
            englishmarks: ['', Validators.required],
            sindhimarks: ['', Validators.required],
            pakistanstudiesmark: ['', Validators.required],
            chemistrytheorymarks: ['', Validators.required],
            chemistrypracticalmarks: ['', Validators.required],
            biotheorymarks: ['', Validators.required],
            biopracticalmarks: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']
            

        });

    }


        getNinthgeneralclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: ['', Validators.required],
            fathername: ['', Validators.required],
            enrollmentnumber: ['', Validators.required],
            dateofbirth: [''],
            yearofappearing: [''],
            englishmarks: ['', Validators.required],
            sindhimarks: ['', Validators.required],
            pakistanstudiesmark: ['', Validators.required],
            generalsciencemarks: ['', Validators.required],
            mathsmarks: ['', Validators.required],
            group: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']
            

        });

    }


    getstudentdemographicdata(){
        return this.fb.group({
            studentrollnumber: ['', Validators.required]
        })
    }


        getMatricscienceclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: [''],
            fathername: [''],
            matricenrollmentnumber: [''],
            dateofbirth: [''],
            yearofappearing: [''],
            englishmarks: ['', Validators.required],
            urdumarks: ['', Validators.required],
            mathsmark: ['', Validators.required],
            islamiatmarks: [''],
            ethicsmarks: [''],
            physicstheorymarks: [''],
            physicspracticalmarks : [''],
            examtype: ['', Validators.required],
            schoolid: [''],
            schoolname: [''],
            id: [''],
            ninthrollnumber: ['']
            

        });

    }


    getMatricgeneralclassform(){
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: [''],
            fathername: [''],
            matricenrollmentnumber:[''],
            dateofbirth: [''],
            yearofappearing: [''],
            englishmarks: [''],
            urdumarks: [''],
            islamiatmarks: [''],
            ethicsmarks: [''],
            islamicstudiesmarks: [''],
            commercialgeographymarks: [''],
            civicsmarks: [''],
            economicsmarks: [''],
            id: [''],
            ninthrollnumber: [''],
            schoolid: [''],
            schoolname: [''],
            examtype: ['', Validators.required],
            group: ['', Validators.required]
        })


    }


    getmatricclassform(){
        this.markAsSubmitted(false);
        return this.fb.group({

            studentname: ['', Validators.required],
            studentfathername: ['', Validators.required],
            studentrollnumber: ['', Validators.required],
            englishmarks: ['', Validators.required],
            urdumarks: ['', Validators.required],
            pakistanstudiesmarks: ['', Validators.required],
            mathmarks: ['', Validators.required],
            physicsmarks: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']

        })
    }


    getfirstyearclassform(){
        this.markAsSubmitted(false);
        return this.fb.group({

            studentname: ['', Validators.required],
            studentfathername: ['', Validators.required],
            studentrollnumber: ['', Validators.required],
            englishmarks: ['', Validators.required],
            urdumarks: ['', Validators.required],
            islamiatmarks: ['', Validators.required],
            physicsmarks: ['', Validators.required],
            chemistrymarks: ['', Validators.required],
            mathsmarks: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']

        })
    }


        getsecondyearclassform(){
        this.markAsSubmitted(false);
        return this.fb.group({

            studentname: ['', Validators.required],
            studentfathername: ['', Validators.required],
            studentrollnumber: ['', Validators.required],
            englishmarks: ['', Validators.required],
            urdumarks: ['', Validators.required],
            pakistanstudiesmarks: ['', Validators.required],
            physicsmarks: ['', Validators.required],
            chemistrymarks: ['', Validators.required],
            mathsmarks: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']

        })
    }


        getninthform(){
            return this.fb.group({
                schoolname: [''],
                enrollmentnumber: [''],
                studentname: [''],
                fathername: ['']
            });
        }

        adduserform(){
            return this.fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                password: ['', Validators.required],
                role: ['', Validators.required]
            })
        }

    updateuserform(){
            return this.fb.group({
                id: ['',Validators.required],
                name: ['', Validators.required],
                email: ['', Validators.required],
                password: ['', Validators.required],
                role: ['', Validators.required]
            })
        }



}
