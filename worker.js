const kue = require('kue');
const queue = kue.createQueue({
    redis: process.env.REDIS
});


queue.process('email', function(job, done){
    email(job.data.to, done);
});

queue.on( 'error', function( err ) {
    console.log( 'Oops... ', err );
});
function email(address, done) {
    console.log('EMAIL', address);
    done();
}