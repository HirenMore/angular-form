import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { jsPDF } from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";
@Component({
  selector: "app-pdf-maker",
  templateUrl: "./pdf-maker.component.html",
  styleUrls: ["./pdf-maker.component.scss"],
})
export class PdfMakerComponent implements OnInit {
  constructor() {}

  @ViewChild("pdfTable") pdfTable: ElementRef;
  ngOnInit(): void {}
  imgurl =
    "https://images.unsplash.com/photo-1614174486191-3a54cf4c603b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }
}
