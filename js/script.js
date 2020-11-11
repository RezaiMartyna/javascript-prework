{
function playGame(playerInput){
	clearMessages();

	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	function getMoveName(argMoveId){
		if(argMoveId == 1){
	  	return 'kamień';
		} if(argMoveId == 2){
			return 'papier';
		} if(argMoveId == 3){
			return 'nożyce';
		}
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
  	}

	randomNumber = Math.floor(Math.random() * 3 + 1);

	argComputerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + argComputerMove);

	argPlayerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + argPlayerMove);

	function displayResult(argComputerMove, argPlayerMove){
		if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  	return 'Ty wygrywasz!';
		} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			return 'Komputer wygrywa';
		} else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			return 'Remis';
		} else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			return 'Komputer wygrywa';
		} else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			return 'Ty wygrywasz!';
		} else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
			return 'Remis';
		} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			return 'Ty wygrywasz';
		} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			return 'Komputer wygrywa';
		} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			return 'Remis';
		} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
			return 'Wybrałeś złą liczbę wybierz 1,2 lub 3'; 
		} else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
			return 'Wybrałeś złą liczbę wybierz 1,2 lub 3'; 
		} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
	  		return 'Wybrałeś złą liczbę wybierz 1,2 lub 3'; 
  		}
	}

	let result = displayResult(argComputerMove, argPlayerMove);

	printMessage('Wynik: ' + result);
	

}
	
document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });
}