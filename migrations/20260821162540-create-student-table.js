'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('students',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        firstName: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        lastName: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        classId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'classes',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};
