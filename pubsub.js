const { RedisPubSub } = require('graphql-redis-subscriptions');
const Redis = require('ioredis');

const options = {
    host: 'localhost',
    port: 6379,
    retryStrategy: times => Math.max(times * 50, 2000),
}

const pubsub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
});

module.exports = pubsub