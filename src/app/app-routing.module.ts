import { BasicComponent } from "./basic/basic.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SuperHttpComponent } from "./super-http/super-http.component";
import { PdfMakerComponent } from "./pdf-maker/pdf-maker.component";

const routes: Routes = [
  {
    path: "",
    component: BasicComponent,
  },
  {
    path: "http",
    component: SuperHttpComponent,
  },
  {
    path: "pdfMaker",
    component: PdfMakerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
