var restart = document.querySelector("#b")
var squares = document.querySelectorAll('td')

function clear(){
	for(i=0 ; i<squares.length ; i++){
		squares[i].textContent = ''
	}
}

restart.addEventListener('click',clear)

var first = document.querySelector('#one')

function changemaker(){
	if(first.textContent===''){
		first.textContent==='X';
	}
	else if(first.textContent==='X'){
		first.textContent==='O';
	}
	else{
		first.textContent==='';
	}
}

for(i=0 ; i<squares.length ; i++){
	squares[i].addEventListener('click',changemaker)
}