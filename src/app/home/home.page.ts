import { Component } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalCtrl: ModalController
  ) {}

  async present() {
    const modal = await this.modalCtrl.create({
      presentingElement: this.routerOutlet.nativeEl,
      component: ModalPage,
      cssClass: ['app-modal'],
      backdropDismiss: false,
      keyboardClose: false,
      swipeToClose: false,
    });

    modal.present();
  }
}
