const kue = require('kue');
const queue = kue.createQueue({
    redis: process.env.REDIS
});




var job = queue.create('email', {
    title: 'welcome email for tj'
    , to: 'tj@learnboost.com'
    , template: 'welcome-email'
}).save( function(err){
    if( !err ) console.log( job.id );
});