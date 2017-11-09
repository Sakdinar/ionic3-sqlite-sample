import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseService {

    database: SQLiteObject;

    constructor(private sqlite: SQLite, private platform: Platform) {
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'sample.db',
                location: 'default'
            }).then((database: SQLiteObject) => {
                this.database = database;
            })
        });
    }

    getConnection() {
        return this.database;
    }



}
