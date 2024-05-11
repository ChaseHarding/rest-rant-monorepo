'use strict';

const { toDefaultValue } = require("sequelize/types/lib/utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'role', {
      type: Sequelize.DataTypes.ENUM,
      values: [
        'reviewer',
        'admin',
      ],
      defaultValue: 'reviewer'
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'role')
  }
};
