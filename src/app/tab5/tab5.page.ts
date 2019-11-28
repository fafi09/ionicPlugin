import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRange } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalpageComponent } from '../modalpage/modalpage.component';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from "../popover/popover.component";
import { LoadingController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('ionRange1') ionRange1: IonRange;
  users: any = [{ name: 'tom', age: 14 }, { name: 'tom1', age: 14 }, { name: 'tom2', age: 14 }
    , { name: 'tom3', age: 14 }, { name: 'tom4', age: 14 }, { name: 'tom5', age: 14 }, { name: 'tom6', age: 14 }, { name: 'tom7', age: 14 }, { name: 'tom8', age: 14 }, { name: 'tom9', age: 14 }];
  //constructor() {}
  data: any;
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      //分页取数
      this.users.push({ name: 'tom10', age: 14 })
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //if (data.length == 1000) {
      // event.target.disabled = true;
      //}
    }, 500);
  }

  toggleInfiniteScroll() {
    console.log('toggleInfiniteScroll');
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  constructor(private menu: MenuController, public modalController: ModalController, public popoverController: PopoverController, public loadingController: LoadingController, private file: File, public toastController: ToastController) { }

  openFirst() {
    console.log('openFirst');
    this.menu.enable(true, 'first');
    this.menu.open('first');

  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalpageComponent,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }

  pSubmit() {
    console.log(this.ionRange1.value);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  checkFile() {
    //let promise = this.file.checkDir(this.file.dataDirectory, 'mydir');
    let promise = this.file.checkDir(this.file.dataDirectory, 'data');
    promise.then(_ => {this.presentToast('Directory exists');
    console.log('Directory exists');})
    .catch(err =>
      {this.presentToast('Directory doesnot exist');console.log('Directory doesnot exist');});
    //this.presentToast('Directory exists');
  }
  
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
}
