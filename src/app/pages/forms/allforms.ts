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
            englishmarks: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            sindhimarks: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            pakistanstudiesmark: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            chemistrytheorymarks: ['', [Validators.required, Validators.min(0), Validators.max(85)]],
            chemistrypracticalmarks: ['', [Validators.required, Validators.min(0), Validators.max(15)]],
            computertheorymarks: ['', [Validators.required, Validators.min(0), Validators.max(85)]],
            computerpracticalmarks: ['', [Validators.required, Validators.min(0), Validators.max(15)]],
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
            englishmarks: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            sindhimarks: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            pakistanstudiesmark: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            chemistrytheorymarks: ['', [Validators.required, Validators.min(0), Validators.max(85)]],
            chemistrypracticalmarks: ['', [Validators.required, Validators.min(0), Validators.max(15)]],
            biotheorymarks: ['', [Validators.required, Validators.min(0), Validators.max(85)]],
            biopracticalmarks: ['', [Validators.required, Validators.min(0), Validators.max(15)]],
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
            englishmarks: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            sindhimarks: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            pakistanstudiesmark: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
            generalsciencemarks: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
            mathsmarks: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
            group: ['', Validators.required],
            schoolid: [''],
            schoolname: ['']


        });

    }


    getstudentdemographicdata() {
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
            physicspracticalmarks: [''],
            examtype: ['', Validators.required],
            schoolid: [''],
            schoolname: [''],
            id: [''],
            ninthrollnumber: ['']


        });

    }


    getMatricgeneralclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: [''],
            fathername: [''],
            matricenrollmentnumber: [''],
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


    getmatricclassform() {
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


    getfirstyearclassform() {
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


    getsecondyearclassform() {
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



    updateninthscienceform(){
                   return this.fb.group({
                            studentid: [''],
                            name: [''],
                            fathername: [''],
                            ninthrollnumber: [''],
                            englishmarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            sindhimarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            pakistanstudiesmarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            chemistrytheory: ['',[Validators.required,Validators.min(0),Validators.max(85)]],
                            chemistrypractical: ['',[Validators.required,Validators.min(0),Validators.max(15)]],
                            computertheory: ['',[Validators.required,Validators.min(0),Validators.max(85)]],
                            computerpractical: ['',[Validators.required,Validators.min(0),Validators.max(15)]],
                            recordid: ['']
            })

    }    


        updateninthbioform(){
                   return this.fb.group({
                            studentid: [''],
                            name: [''],
                            fathername: [''],
                            ninthrollnumber: [''],
                            englishmarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            sindhimarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            pakistanstudiesmarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            chemistrytheory: ['',[Validators.required,Validators.min(0),Validators.max(85)]],
                            chemistrypractical: ['',[Validators.required,Validators.min(0),Validators.max(15)]],
                            biotheory: ['',[Validators.required,Validators.min(0),Validators.max(85)]],
                            biopractical: ['',[Validators.required,Validators.min(0),Validators.max(15)]],
                            recordid: ['']
            })

    }    


        updateninthgeneralform(){
                   return this.fb.group({
                            studentid: [''],
                            name: [''],
                            fathername: [''],
                            ninthrollnumber: [''],
                            englishmarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            sindhimarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            pakistanstudiesmarks: ['',[Validators.required,Validators.min(0),Validators.max(75)]],
                            generalsciencemarks: ['',[Validators.required,Validators.min(0),Validators.max(100)]],
                            mathsmarks: ['',[Validators.required,Validators.min(0),Validators.max(100)]],
                            recordid: ['']
            })

    }    


    getPreMedicalclassform() {
        this.markAsSubmitted(false);
        return this.fb.group({
            studentname: [''],
            studentfathername: [''],
            studentrollnumber: [''],
            englishmarks: [''],
            urdumarks: [''],
            islamiatmarks: [''],
            physicspracticalmarks: [''],
            physicstheorymarks: [''],
            chemistrypracticalmarks: [''],
            chemistrytheorymarks: [''],
            zoologymarks: [''],
            botanymarks: [''],            
            id: [''],
            schoolid: [''],
            matricpassingyear:[''],
            yearappearing:[''],
            totalmarks:[''],        
            percentage : [''],
            grade : ['']    
        })


    }



}
