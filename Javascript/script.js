var col_1 = document.getElementById('column_one');
var col_2 = document.getElementById('column_two');
var col_3 = document.getElementById('column_three');
var col_4 = document.getElementById('column_four');
var full_img = document.getElementById('full_img');
var half_img = document.getElementById('half_img');
var quarter_img = document.getElementById('quarter_img');

function full(){
    col_1.style.width="100%";
    col_2.style.width="100%";
    col_3.style.width="100%";
    col_4.style.width="100%";
    full_img.style.color="red";
    half_img.style.color="#DFFF00";
    quarter_img.style.color="#DFFF00";
}
function half(){
    col_1.style.width="50%";
    col_2.style.width="50%";
    col_3.style.width="50%";
    col_4.style.width="50%";
    full_img.style.color="#DFFF00";
    half_img.style.color="red";
    quarter_img.style.color="#DFFF00";
}
function quarter(){
    col_1.style.width="25%";
    col_2.style.width="25%";
    col_3.style.width="25%";
    col_4.style.width="25%";
    full_img.style.color="#DFFF00";
    half_img.style.color="#DFFF00";
    quarter_img.style.color="red";
}