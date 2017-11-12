export interface Setting {
    id: number;
    key: string;
    value: string;
};

export const SQL_CREATE_SETTINGS_TABLE: string = "CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY, key VARCHAR UNIQUE, value VARCHAR);";
export const SQL_BATCH_INSERT_INTO_SETTINGS_TABLE: string[] =[
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'key1', 'value1'); ",
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'key2', 'value2'); ",
    "INSERT OR IGNORE INTO settings VALUES(NULL, 'keyX', 'valueX'); "
]
export const  SQL_SELECT_ALL_SETTINGS: string = "SELECT * FROM settings;"