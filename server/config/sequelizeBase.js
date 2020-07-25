//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('vuemall', 'root', 'root', {
	host: 'note.sycki.com',
	port: 17119,
	dialect: 'mysql',
})

module.exports = sequelize;