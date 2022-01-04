function calcArea(side){
    return side*side;
}

function calcVolume(areaFunc,side){
    let area=areaFunc(side);
    return area*side;
}

console.log(calcVolume(calcArea,5));

