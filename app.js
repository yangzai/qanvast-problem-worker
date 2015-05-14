'use strict';

var queue = require('jackrabbit')(process.env.CLOUDAMQP_URL || 'amqp://localhost');

queue.on('connected', function() {

  queue.create('hello.job', function () {
    queue.create('hello.callback', function () {
      queue.handle('hello.job', function (job, ack) {
        queue.publish('hello.callback', { id: job.id, message: 'Hello! Nice to meet you, ' + job.name + '!' });
        ack();
      });
    });
  });

});