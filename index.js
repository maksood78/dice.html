var p1=Math.floor(Math.random()*6)+1;
// alert(p1);
var im1="images/dice"+p1+".png";
var p2=Math.floor(Math.random()*6)+1;
var im2="images/dice"+p2+".png";
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",im1);
image2.setAttribute("src",im2);
// var name1=prompt("Enter 1st playser name:")
// var name2=prompt("Enter 2nd playser name:")

if (p1>p2){
  document.querySelector("h1").innerText="1st player win the game ! ";
}
else if(p1<p2){
  document.querySelector("h1").innerText="2nd player win the game ! ";
}
else{
  document.querySelector("h1").innerText="GAme is draw ";
}
