var cluster = require('cluster');

cluster.schedulingPolicy = cluster.SCHED_NONE;

if (cluster.isMaster) {
  require('os').cpus().forEach(cluster.fork);
  cluster.on('exit', cluster.fork);
} else {
  console.log(cluster.worker.id);
  require('./app');
}