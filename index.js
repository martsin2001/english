var inp1 = document.getElementById('input1');
		var inp2 = document.getElementById('input2');
		var rez = document.getElementById('but');
		var proces = document.getElementById('proces')

		function check(){

			if (inp1.value === 'english' && inp2.value === 'kurs' ) {
				window.location = 'Курс.html';
			}
			if (inp1.value === 'english' && inp2.value === 'test' ) {
				window.location = 'Тест.html';
			}
			else{
				proces.textContent = 'Неправильний логін чи пароль!'
			}
			
		}

		rez.addEventListener('click' , check);