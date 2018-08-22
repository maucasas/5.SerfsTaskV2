import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NuevosPage } from '../nuevos/nuevos.component';
import { ReportByGroups } from '../registros/reports/reports';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReportByGroups;
  tab3Root = NuevosPage;

  constructor() {

  }
}
