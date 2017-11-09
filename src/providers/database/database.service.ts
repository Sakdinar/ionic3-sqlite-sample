import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';


@Injectable()
export class DatabaseService {

    database: SQLiteObject;
    ready: Promise<void>;

    constructor(private sqlite: SQLite, private platform: Platform) {
        this.ready = this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'sample.db',
                location: 'default'
            })
            .then((database: SQLiteObject) => {
                this.database = database;
            })
            .catch(e => console.log(e));
        });
    }

    getDatabase(): Promise<SQLiteObject> {
        return this.ready.then(() => {
            return this.database;
        })
    }



}
