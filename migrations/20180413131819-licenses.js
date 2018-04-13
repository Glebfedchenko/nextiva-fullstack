'use strict';

var dbm;
var type;
var seed;


const defaultValues = [
  [
    "CRM_DEV",
    "CRM_BASE_FEATURE"
  ],
  [
    "Data-Migration",
    "Base-Data-Migration"
  ],
  [
    "Surveys_DEV",
    "SURVEYS_BASE_FEATURE"
  ]
];

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  return db.createTable('licenses', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    product: {
      type: 'string',
      notNull: true,
    },
    feature: {
      type: 'string',
      notNull: true,
    },
  }, () => {
    for (let license of defaultValues) {
      db.insert('licenses', ['product', 'feature'], license, callback);
    }
  });
};

exports.down = function (db) {
  return db.dropTable('licenses');
};

exports._meta = {
  "version": 1
};
