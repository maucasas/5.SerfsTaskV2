import { Component } from "../../../node_modules/@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { IPublicador } from '../../models/publicador.model';
import { FormBuilder, FormGroup, Validators } from "../../../node_modules/@angular/forms";

@Component({
    selector: 'page-Modal',
    templateUrl: 'modal.report.html'
})

export class ModalReports {1

    publicador: IPublicador;
    form: FormGroup;
    tagSend = false;
    
constructor(private navCtrl: NavController, private navParams: NavParams, public formBuilder: FormBuilder) {
this.publicador= this.navParams.get('publicador');
console.log(this.publicador);
this.form = this.createForm();


}
    goBack() {
      this.navCtrl.pop();
    }

saveData() {
    console.log(this.form.value);
    this.tagSend = true;
}
    private createForm(){
        return this.formBuilder.group(
            {
                id:[this.publicador.Id, Validators.required],
                publicaciones:['', Validators.required],
                videos: ['', Validators.required],
                horas: ['', Validators.required],
                revisitas: ['', Validators.required],
                estudios: ['', Validators.required],
                observaciones: ['', Validators.required]
            }
        );
    }
    
}