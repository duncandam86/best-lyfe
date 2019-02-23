'use strict';

const CronJob = require('cron').CronJob;
const notificationsHabits = require('./workers/notificationsWorker');
const moment = require('moment');

const schedulerFactory = () => {
  return {
    start: function() {
      new CronJob('00 * * * * *', function() {
        console.log('Running Send Notifications Worker for ' +
          moment().format());
        notificationsHabits.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerFactory();
