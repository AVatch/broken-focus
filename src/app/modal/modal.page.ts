import { EmojiButton } from '@joeattardi/emoji-button';

import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  private _emojiPickerRef: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.initEmojiPicker();
  }

  private initEmojiPicker() {
    this._emojiPickerRef = new EmojiButton({
      theme: 'auto',
      showSearch: true,
    });

    this._emojiPickerRef.on('emoji', (selection) => {});
  }

  onPresentSecondaryModal() {
    this.presentSecondaryModal(ModalPage, {});
  }

  onPickEmoji(ev: any) {
    if (!(this._emojiPickerRef && this._emojiPickerRef !== undefined)) {
      return;
    }

    this._emojiPickerRef.togglePicker(ev.target);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  private async presentSecondaryModal(page, props, options = {}) {
    const modal = await this.modalCtrl.create({
      presentingElement: await this.modalCtrl.getTop(),
      component: page,
      cssClass: 'app-modal',
      backdropDismiss: false,
      keyboardClose: false,
      swipeToClose: false,
      showBackdrop: false,
      componentProps: {
        ...props,
      },
      ...options,
    });

    modal.present();

    return await modal.onWillDismiss();
  }
}
