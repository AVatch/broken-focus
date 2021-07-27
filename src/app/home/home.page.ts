import { EmojiButton } from '@joeattardi/emoji-button';

import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private _emojiPickerRef: any;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.initEmojiPicker();
  }

  onPickEmoji(ev: any) {
    if (!(this._emojiPickerRef && this._emojiPickerRef !== undefined)) {
      return;
    }

    this._emojiPickerRef.togglePicker(ev.target);
  }

  private initEmojiPicker() {
    this._emojiPickerRef = new EmojiButton({
      theme: 'auto',
      showSearch: true,
    });

    this._emojiPickerRef.on('emoji', (selection) => {});
  }

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
