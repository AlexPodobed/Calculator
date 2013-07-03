(function(){
	'use strict'
	function calulator(){

		var 	first_number,
			second_number,
			result,
			operation,
			arr_of_operations;



		function removeClass(collection, className ){
			for(var i = 0; i < collection.length; i += 1){
				if(collection[i].className === className){
					collection[i].className = "";
					return;
				}
			}
		};
		// по нажатию на элемент "операций" - добовляет класс и запоминает в переменную operation
		document.querySelector('.operation').onclick = function(e){
			var 	event = e || window.ivent,
				target = event.target;

			arr_of_operations = document.querySelectorAll('.operation span');

			if (target.tagName !== "SPAN" || target.id === "equal") {
				return ;
			}
			removeClass(arr_of_operations, 'selected');
			target.className =  "selected" ;
			operation = target.innerHTML;
		};

		// по нажатию на " = " выполянется действие, согласно выбранному элементу операции
		document.querySelector("#equal").onclick = function  () {

			first_number = +document.querySelector("#first-number").value;
			second_number = +document.querySelector("#second-number").value;
			result = document.querySelector('#result');

			if (operation === "-"){
				result.value = first_number - second_number;
				return;
			}
			if (operation === "+"){
				result.value = first_number + second_number;
				return;
			}
			if (operation === "*"){
				result.value = first_number * second_number;
				return;
			}
			if (operation === "/"){
				result.value = first_number / second_number;
				return;
			}

		};

	}

	calulator();

})();
