var color= "#03A8AC"
function ChangeColor(id) {
var clrDiv = document.getElementsByClassName("Cell")[id];
if (clrDiv.style.backgroundColor=="" ){
    clrDiv.style.backgroundColor = color;
    $(".days")[id].style.color = "white";
    clrDiv.getElementsByTagName("span")[0].style.color="white"
}
else{
    clrDiv.style.backgroundColor = "";
    $(".days")[id].style.color = "#ccc";
    clrDiv.getElementsByTagName("span")[0].style.color="black"
}
}

function changeText(id){
    var text =document.getElementsByClassName("Cell")[id].getElementsByTagName("input")[0].getAttribute("title")
    $("#days").html(text)
}
function getSelectedValue(){
    var val = $("#mediumbutton").val()
    $("#items").html(val)
    $(".item-details").html(val)
}
function changeToogleTextColor(){
    var checked = document.getElementById('toggle').checked;
    $('#toggletext1 > span').addClass('selected-check');    
    if(checked){
        $('#toggletext1 > span').removeClass('selected-check');    
        $('#toggletext2 > span').addClass('selected-check');
         
    }else{
        $('#toggletext1 > span').addClass('selected-check');
        $('#toggletext2 > span').removeClass('selected-check');
    }
}