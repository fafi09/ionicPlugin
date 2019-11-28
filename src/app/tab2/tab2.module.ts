import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ActionSheetExampleComponent } from "../action-sheet-example/action-sheet-example.component";
import { AlertExampleComponent } from "../alert-example/alert-example.component";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, ActionSheetExampleComponent, AlertExampleComponent]
})
export class Tab2PageModule {}
