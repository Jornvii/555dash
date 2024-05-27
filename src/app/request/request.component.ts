import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';


export interface Element {
  No: number;
  PartNo: string;
  ItemNo: string;
  MC: string;
  Master_Tooling_ID: string;
  Process: string;
  Spec: string;
  Usage_pcs: number;
  Qty?: number;
  Result1?: string;
  Result2?: string;
  Result3?: string;
  Result4?: string;
  Result5?: string;
  Result6?: string;
}
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  additionalForm: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);
  processOptions: string[] = [];
  MCOptions: string[] = [];
  displayedColumns: string[] = [
    'select',
    'part_no',
    'process',
    'mc',
    'item_no',
    'master_tooling_id',
    'spec',
    'usage_pcs',
    'qty',
    'result1',
    'result2',
    'result3',
    'result4',
    'result5',
    'result6',
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.requestForm = this.fb.group({
      PartNo: ['', Validators.required],
      Process: [''],
      MC: ['']
    });

    this.additionalForm = this.fb.group({
      Position: ['', Validators.required],
      Department: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.requestForm = this.fb.group({
      PartNo: ['', Validators.required],
      Process: [''],
      MC: ['']
    });

    this.additionalForm = this.fb.group({
      Position: ['', Validators.required],
      Department: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  onPartNoChange() {
    const partNo = this.requestForm.get('PartNo')?.value;
    if (partNo) {
      this.authService.getProcessOptions(partNo).subscribe(data => {
        this.processOptions = data;
      }, error => {
        console.error('Error fetching process options:', error);
      });
    }
  }

  onProcessChange() {
    const partNo = this.requestForm.get('PartNo')?.value;
    const process = this.requestForm.get('Process')?.value;
    if (partNo && process) {
      this.authService.getMCOptions({ PartNo: partNo, Process: process }).subscribe(data => {
        this.MCOptions = data;
      }, error => {
        console.error('Error fetching MC options:', error);
      });
    }
  }

  onSubmit() {
    this.authService.getProducts(this.requestForm.value).subscribe(data => {
      this.dataSource.data = data;
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }




  // onSubmitRequest() {
  //   if (this.additionalForm.valid) {
  //     const selectedItems = this.selection.selected.map(row => ({
  //       ...row,
  //       ...this.additionalForm.value
  //     }));

  //     console.log('Selected items:', selectedItems); // Log selected items to the console

  //     this.authService.submitRequest({ selectedRows: selectedItems, ...this.additionalForm.value })?.subscribe(response => {
  //       console.log('Submit response:', response);
  //       // Handle the response after submission
  //     }, error => {
  //       console.error('Error submitting request:', error);
  //     });
  //   }
  // }



  onSubmitRequest() {
    if (this.additionalForm.valid) {
      const selectedItems = this.selection.selected.map(row => ({
        ...row,
        ...this.additionalForm.value
      }));

      console.log('Selected items:', selectedItems); // Log selected items to the console

      this.authService.submitRequest({ selectedRows: selectedItems }).subscribe(response => {
        console.log('Submit response:', response);
        // Handle the response after submission
      }, error => {
        console.error('Error submitting request:', error);
      });
    }
  }
}
