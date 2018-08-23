import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { NavController } from 'ionic-angular/umd';
import { IPublicador, Publicadormodel } from '../../../models/publicador.model';



export class NuevoModal {
    publicador: IPublicador;
    form: FormGroup;
    constructor(private navctrl: NavController, public formBuilder: FormBuilder) {
        
    }


    createForm() {
        return this.formBuilder.group({
            
        })
    }
}