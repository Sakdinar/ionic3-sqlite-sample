import { SettingService } from './../../providers/setting/setting.service';
import { Setting } from './../../models/setting.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  settings: Setting[];

  constructor(private settingService: SettingService) {
  }

  ionViewWillLoad() {
    this.settingService.getAll()
      .then((settings: Setting[]) => {
        this.settings = settings;
      })
      .catch(error => console.log(error));
  }

}
