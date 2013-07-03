function Calculator(config){
	this.self = this;
	this.first_number = config.first_number_node;
	this.second_number = config.second_number_node;
	this.summ_btn = config.summ_node;
	this.minus_btn = config.minus_node;
	this.multiply_btn = config.multiply_node;
	this.devide_btn = config.devide_node;

	this.values = this.getValues();

	this.init();
}

Calculator.prototype.getValues = function() {
	var 	first_number,
		second_number;

	first_number = parseInt(this.first_number.value,10);
	second_number = parseInt(this.second_number.value,10);

	return	{
			'first_number': first_number,
			'second_number': second_number
		};
};

Calculator.prototype.summ = function  () {
	this.values = this.getValues();
	console.log(this.values['first_number'] + this.values['second_number']);
};
Calculator.prototype.minus = function  () {
	this.values = this.getValues();
	return this.values['first_number'] - this.values['second_number'];
};
Calculator.prototype.multiply = function  () {
	this.hash = this.getValues();
	return this.values['first_number'] * this.values['second_number'];
};
Calculator.prototype.devide = function  () {
	this.values = this.getValues();
	return this.values['first_number'] / this.values['second_number'];
};

Calculator.prototype.init = function() {
	var self = this;
	this.summ_btn.onclick = function  () {
		self.summ();
	};
	this.minus_btn.onclick = this.minus;
	this.multiply_btn.onclick = this.multiply;
	this.devide_btn.onclick = this.devide;
};

var config = {
	first_number_node: document.querySelector('#first-number'),
	second_number_node: document.querySelector('#second-number'),
	summ_node: document.querySelector('#summ'),
	minus_node: document.querySelector('#minus'),
	multiply_node: document.querySelector('#multiply'),
	devide_node: document.querySelector('#devide')
};