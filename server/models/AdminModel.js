const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const AdminModel = sequelize.define('admin',{
	id:{
		type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
	},
	account:{
		type:Sequelize.STRING(255),
		unique:true,
		allowNull:false
	},
	name:{
		type:Sequelize.STRING(64),
		allowNull:false
	},
	pwd:{
		type:Sequelize.STRING(255),
		allowNull:false
	},
},{
	timestamps:false,
});

//当表不存在时自动创建表
AdminModel.sync();
// AdminModel.create({account:'admin', name:'admin', pwd:'admin'})

module.exports = AdminModel;