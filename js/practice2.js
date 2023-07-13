const BASE_COLOR = "rgb(52,73,94)";
const OTHER_COLOR = "green";
function handClick(){
    let currentColor = title.style.color;
    if (currentColor == BASE_COLOR){
        title.style.color = BASE_COLOR;
    }
}
title.addEventListener("click", handleClick);