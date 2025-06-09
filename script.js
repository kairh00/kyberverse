const theme = ["default", "fun", "brutal",];
//var button = document.getElementsByClassName("themer");
let i =1;
document.documentElement.className = theme[Math.floor((Math.random() * theme.length)+1)];

function themechange(){
document.documentElement.className = theme[i];
  
 if (i >= theme.length){ i=1;}
  else {i++;}
  console.log(i);
  
}                        
  

//button.addEventListener("click", themechange);
