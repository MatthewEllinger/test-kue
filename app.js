const kue = require('kue');
const queue = kue.createQueue({
    redis: process.env.REDIS
});




var job = queue.create('email', {
    emailType: 'user.registering',
    email: 'useremail@test.com',
    code: '12345',
    websiteUrl: 'http://test.mustrace.com'
}).save( function(err){
    if( !err ) console.log( job.id );
});