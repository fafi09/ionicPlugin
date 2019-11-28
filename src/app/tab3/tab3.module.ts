import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { PickerExampleComponent } from "../picker-example/picker-example.component";
import { TechdetailsPageModule } from "../techdetails/techdetails.module";
import { TechdetailsPage } from "../techdetails/techdetails.page";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TechdetailsPageModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, PickerExampleComponent],
  entryComponents: [TechdetailsPage]
})
export class Tab3PageModule {}
