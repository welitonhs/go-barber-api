module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn(
      'appointments',
      'canceled_at',
      'cancelled_at'
    );
  },

  down: queryInterface => {
    return queryInterface.renameColumn(
      'appointments',
      'cancelled_at',
      'canceled_at'
    );
  },
};
