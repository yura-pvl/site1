var counter = 0;

var massXO = ['','-','-','-','-','-','-','-','-','-'];

var winner = '';
var win_combs = [
    [],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]



for (let i = 1; i < 10; i++ ) {
    document.getElementById(i).innerHTML = massXO[i];
}



function check_win(){
    for (let i = 1; i < 10; i++){
        if ( massXO[win_combs[i][0]] != '-' && massXO[win_combs[i][0]] == massXO[win_combs[i][1]] && massXO[win_combs[i][1]] == massXO[win_combs[i][2]])  {
            winner = massXO[win_combs[i][0]];
            result_out(winner);
        }
    }
}


function turn(x){
    var cell = document.getElementById(x);
    if (counter % 2 == 0) {
        cell.innerHTML = 'X';
        massXO[x] = 'X';
        
    } else {
        cell.innerHTML = 'O';
        massXO[x] = 'O';
    }
    
    cell.onclick = '';
    counter ++;
    if  (counter > 4) {
        check_win();
    }    
}


function result_out(name){
    let text = document.getElementById('result');
    text.innerHTML = 'Победитель '+ name;
    for (let i = 1; i < 10; i++ ) {
        document.getElementById(i).onclick = '';
    }
}





