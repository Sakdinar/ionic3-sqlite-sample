import { Setting } from './../../models/setting.interface';
import { DatabaseService } from './../database/database.service';
import { Injectable } from '@angular/core';
import { SQL_SELECT_ALL_SETTINGS } from './../../models/setting.interface';

@Injectable()
export class SettingService {

    constructor(private databaseService: DatabaseService) {
    }

    getAll(): Promise<Setting[]> {
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(SQL_SELECT_ALL_SETTINGS, []).then((data) => {
                let settings: Setting[] = [];
                for (let i = 0; i < data.rows.length; i++) {
                    settings.push({
                        id: data.rows.item(i).id,
                        key: data.rows.item(i).key,
                        value: data.rows.item(i).value
                    });
                };
                return settings;
            });
        });
    }
}
