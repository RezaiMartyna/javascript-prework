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


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(randomNumber);


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

/*function displayResult(argComputerMove, argPlayerMove){
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Komputer wygrywa');
	} else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		printMessage('Remis');
	} else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Komputer wygrywa');
	} else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
		printMessage('Remis');
	} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz');
	} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage ('Komputer wygrywa');
	} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		printMessage ('Remis');
	} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
		printMessage ( 'Wybrałeś złą liczbę wybierz 1,2 lub 3'); 
	} else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
		printMessage ( 'Wybrałeś złą liczbę wybierz 1,2 lub 3'); 
	} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
	  printMessage ( 'Wybrałeś złą liczbę wybierz 1,2 lub 3'); 
  }
}*/

let result = displayResult(argComputerMove, argPlayerMove);

printMessage('Wynik: ' + result);
