import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faChartBar, faUndo, faContactBook, faDashboard, faHand, faLocation, faMoneyBill, faShop,faChartLine,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faUndo=faUndo;
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faChartLine=faChartLine;
  faExclamationCircle=faExclamationCircle;

}
