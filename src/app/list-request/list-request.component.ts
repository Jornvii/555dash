import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrl: './list-request.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSelectModule,MatButtonModule,MatIconModule,MatButtonModule,MatSortModule],

})

export class ListRequestComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','datereq', 'part', 'mc', 'process','area','reqby','status','setgauge'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(private router: Router) {}

  navigateToReturnPage(element: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        id: element.id
      }
    };
    this.router.navigate(['/return'], navigationExtras);
  }




  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

  }
}

export interface PeriodicElement {
  id: number;
  datereq: string;
  part: string;
  area: string;
  reqby: string;
  mc: number;
  process: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 1.0079, process: 'H', status: 'waiting' },
  { id: 2, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 4.0026, process: 'He',status:'waiting' },
  { id: 3, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 6.941, process: 'Li',status:'waiting' },
  { id: 4, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 9.0122, process: 'Be' ,status:'waiting'},
  { id: 5, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 10.811, process: 'B',status:'waiting' },
  { id: 6, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 12.0107, process: 'C',status:'waiting' },
  { id: 7, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 14.0067, process: 'N',status:'waiting' },
  { id: 8, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 15.9994, process: 'O',status:'waiting' },
  { id: 9, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 18.9984, process: 'F' ,status:'waiting'},
  { id: 10, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 20.1797, process: 'Ne' ,status:'waiting'},
  { id: 11, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 22.9897, process: 'Na',status:'waiting' },
  { id: 12, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 24.305, process: 'Mg',status:'waiting' },
  { id: 13, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 26.9815, process: 'Al',status:'waiting' },
  { id: 14, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 28.0855, process: 'Si',status:'waiting' },
  { id: 15, datereq:'23/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 30.9738, process: 'P',status:'waiting' },
  { id: 16, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 32.065, process: 'S' ,status:'waiting'},
  { id: 17, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 35.453, process: 'Cl',status:'waiting' },
  { id: 18, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 39.948, process: 'Ar',status:'waiting' },
  { id: 19, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 39.0983, process: 'K' ,status:'waiting'},
  { id: 20, datereq:'12/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 40.078, process: 'Ca' ,status:'waiting'},
  { id: 21, datereq:'21/12/2024', part: 'A-1AAS1', area:'B123#0123',reqby:'Gvorn@cost',mc: 40.078, process: 'Ca',status:'waiting' },
];
