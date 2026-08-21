'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('classes',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        className: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        teacherId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'teachers',
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
    await queryInterface.dropTable('classes');
  }
};
