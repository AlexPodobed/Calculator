Calculator.Controller = function() {
	var model = new Calculator.Model();
	var values = {};
	var elements = {
		first_input: document.querySelector('#first-number'),
		second_input: document.querySelector('#second-number'),
		summ_node: document.querySelector('#summ'),
		minus_node: document.querySelector('#minus'),
		multiply_node: document.querySelector('#multiply'),
		devide_node: document.querySelector('#devide'),
		result_node: document.querySelector('#result')
	};

	this.getValues = function() {
		var first_number, second_number;

		first_number = parseInt(elements.first_input.value, 10);
		second_number = parseInt(elements.second_input.value, 10);

		return {
			number_one: first_number,
			number_two: second_number
		};
	};

	this.init = function() {
		var self = this;

		elements.summ_node.onclick = function() {
			values = self.getValues();
			elements.result_node.value = model.summ(values);
		};
		elements.minus_node.onclick = function() {
			values = self.getValues();
			elements.result_node.value = model.minus(values);
		};
		elements.multiply_node.onclick = function() {
			values = self.getValues();
			elements.result_node.value = model.multiply(values);
		};
		elements.devide_node.onclick = function() {
			values = self.getValues();
			elements.result_node.value = model.devide(values);
		};
	};
};