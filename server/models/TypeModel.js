const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const TypeModel = sequelize.define('type',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
	},
	name:{
		type:Sequelize.STRING(255),
		allowNull:false
	},
},{
	timestamps:false,
});

//当表不存在时自动创建表
TypeModel.sync();

module.exports = TypeModel;