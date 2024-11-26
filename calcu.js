const input = document.getElementById("values");

function valueofnumbers(num){
    input.value += num;
}

function AllClear(){
    input.value ="";
}

function Delete(){

    if(input.value === Number()){
    input.value = input.value.slice(0,-1);
    }
    else{
        input.value = "";
    }
}

function sumof(){
    try{
        
        input.value = eval(input.value)
    }
    catch{
        input.value = "Text Erorr";
    }
}
function off(){
    alert("Exit For Your Self")
}
