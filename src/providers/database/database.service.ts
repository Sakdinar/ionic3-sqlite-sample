import { SQL_CREATE_SETTINGS_TABLE, SQL_BATCH_INSERT_INTO_SETTINGS_TABLE } from './../../models/setting.interface';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';

const DATA_BASE_NAME = 'sample.db';

@Injectable()
export class DatabaseService {

    database: SQLiteObject;
    ready: Promise<void>;

    constructor(private sqlite: SQLite, private platform: Platform) {
        this.ready = this.platform.ready()
            .then(() => this.initializeDatabase())
            .then(() => this.bootstrapTables())
            .then(() => this.bootstrapData())
    }

    private bootstrapData(): Promise<void> {
        return this.database.sqlBatch(SQL_BATCH_INSERT_INTO_SETTINGS_TABLE).then(() => {
            console.log("Data bootstrapped: " + SQL_BATCH_INSERT_INTO_SETTINGS_TABLE);
        });
    }

    private bootstrapTables(): Promise<void> {
        return this.database.executeSql(SQL_CREATE_SETTINGS_TABLE, {}).then(() => {
            console.log("Table boostrapped: " + SQL_CREATE_SETTINGS_TABLE);
        });
    }

    private initializeDatabase(): Promise<void> {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((database: SQLiteObject) => {
            this.database = database;
            console.log("Database initialized");
        });
    }

    getDatabase(): Promise<SQLiteObject> {
        return this.ready.then(() => {
            return this.database;
        });
    }
}
