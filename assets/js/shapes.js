function getLine(length) {
    // TODO - write method definition here
    let output = "";
    for(let i=0; i<length; i++){
        output += "*";
    }
    return output;
}



function getBox(width, height) {
    // TODO - write method definition here
    let output = "";
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            output += "*";
        }
        output += "\n";
    }
    return output
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
