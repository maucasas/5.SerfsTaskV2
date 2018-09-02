import { Component } from "@angular/core";
import { IPublicador, grupoType } from '../../../models/publicador.model';
import { GroupsService } from '../../../services/groups.services';
import { NavController } from 'ionic-angular';
import { ModalReports } from '../../modals/modal.report';
import { AgregarNuevo } from '../../agregar/agregarNuevo.component';
import { AlertController} from 'ionic-angular';
import { DataNeedService } from '../../../services/dataNeedService';

@Component({
    selector: 'page-reportByGroups',
    templateUrl: 'reports.html'
})

export class ReportByGroups {
    ListByGroup: IPublicador [];
    grupoType = grupoType;
    numGrupo;
    month: string;
    constructor( private groupService: GroupsService,
                 public navCtrl: NavController,
                 public alertCtrl: AlertController,
                 public dataNeed: DataNeedService
                 ) {
                    this.month = dataNeed.getMonth();
                   }

    getNumGroup(numGruop: grupoType) {
        this.ListByGroup = this.groupService.getGroup(numGruop);       
        this.numGrupo = numGruop;
        return this.ListByGroup;        
    }

    popUpEditAdd( type: number){ // añadir validacion de 1. mes 2. 
        if (type === 0){
            console.log("añadir informe del mes ${}");// si el mes esta por fuera de 
        }else if (type===1){
            console.log("editar informe");
        }
    }
    
    presentModal(pub: IPublicador, monthActual: string) {
       this.navCtrl.push(ModalReports, {publicador: pub});
      }
      AddNewPub(){
          this.navCtrl.push(AgregarNuevo);
      }

}