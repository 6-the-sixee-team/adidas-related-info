module.exports = {
    host: process.env.DB_HOST || 'mysql',
    user: 'root',
    password: 'test123',
    database: 'adidas',
    debug: ['ComQueryPacket']
};