import SQLite from 'react-native-sqlite-storage';

const DB = SQLite.openDatabase(
  {
    name: 'growers_database_sqlite.db',
    createFromLocation: 1,
  },
  () => console.log('Connected to database'),
  (error) => console.log('error', error),
);

class Database {
  db;
  constructor(db) {
    this.db = db;
  }
  executeSql = (sql, params = []) =>
    new Promise((resolve, reject) => {
      this.db.transaction((trans) => {
        trans.executeSql(
          sql,
          params,
          (db, results) => {
            resolve(results);
          },
          (error) => {
            reject(error);
          },
        );
      });
    });
}
export default new Database(DB);
