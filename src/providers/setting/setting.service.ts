import { Setting } from './../../models/setting.interface';
import { DatabaseService } from './../database/database.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

    constructor(private database: DatabaseService) {
    }

    get(key: string): Promise<Setting> {
        return this.database
            .getConnection()
            .executeSql('TODO select setting query', [])
            .then((data) => {
                //TODO handle response
                return { key: 'key 1', value: 'value 1' };
            });
    }

}
