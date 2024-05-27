import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-detial',
  templateUrl: './detial.component.html',
  styleUrl: './detial.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSelectModule,MatButtonModule,MatIconModule,MatButtonModule],
})
export class DetialComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  downloadAndPrintPDF() {
    const data = document.getElementById('invoice')!;
    html2canvas(data).then(canvas => {
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight);

      // Open PDF in a new window and trigger the print dialog
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const printWindow = window.open(pdfUrl);

      // Check if the printWindow is not null and trigger print
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      }
    });
  }
}
