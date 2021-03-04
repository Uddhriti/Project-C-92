function add_user(){
    math_player1 =  document.getElementById("player1_name_input").value;
    math_player2 =  document.getElementById("player2_name_input").value;
    
    localStorage.setItem("player1", math_player1);
    localStorage.setItem("player2", math_player2);
    
    window.location = "index2.html";
    }
    