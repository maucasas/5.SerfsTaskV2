import { Component } from "@angular/core";
import { IPublicador, grupoType } from '../../../models/publicador.model';
import { GroupsService } from '../../../services/groups.services';
import { NavController } from 'ionic-angular';
import { ModalReports } from '../../modals/modal.report';
import { AgregarNuevo } from '../../agregar/agregarNuevo.component';

@Component({
    selector: 'page-reportByGroups',
    templateUrl: 'reports.html'
})

export class ReportByGroups {
    ListByGroup: IPublicador [];
    grupoType = grupoType;
    numGrupo;
    constructor(private groupService: GroupsService, public navCtrl: NavController ) {  }

    getNumGroup(numGruop: grupoType) {
        this.ListByGroup = this.groupService.getGroup(numGruop);
       
        this.numGrupo = numGruop;
        return this.ListByGroup;
        
    }
    
    presentModal(pub: IPublicador) {
       this.navCtrl.push(ModalReports, {publicador: pub});
      }
      AddNewPub(){
          this.navCtrl.push(AgregarNuevo);
      }

}