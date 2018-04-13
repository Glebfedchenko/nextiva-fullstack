'use strict';

var dbm;
var type;
var seed;


const defaultValues = [
  [
    "dashboard-objects",
    "dashboard-264",
    4
  ],
  [
    "dashboard-objects",
    "dashboard-197",
    2
  ]
];


/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  return db.createTable('permissions', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    scope: {
      type: 'string',
      notNull: true,
    },
    resource: {
      type: 'string',
      notNull: true,
    },
    action_value: {
      type: 'int',
      notNull: true,
    },
  }, () => {
    for (let permission of defaultValues) {
      db.insert('permissions', ['scope', 'resource', 'action_value'], permission, callback);
    }
  });
};

exports.down = function(db) {
  return db.dropTable('permissions');
};

exports._meta = {
  "version": 1
};
