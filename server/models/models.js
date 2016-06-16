var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
	name: {type:String, required: true},
	created_at: {type: Date, default: Date.now}
});



var OrderSchema = new mongoose.Schema({
	name: {type: String, required:true},
	product: {type: String, required: true}, 
	qty: {type: Number}, 
	created_at: {type: Date, default: Date.now}
});



var ProductSchema = new mongoose.Schema({
	name: {type:String, required: true},
	img: {type:String},
	description: {type:String},
	qty: {type:Number}
});
mongoose.model('Customer', CustomerSchema);
mongoose.model('Product', ProductSchema);
mongoose.model('Order', OrderSchema);
