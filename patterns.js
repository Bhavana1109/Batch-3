//1Q
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// Number of rows and columns for the pattern
//const rows = 5;
//const cols = 5;
//for (let i = 0; i < rows; i++) {
    //let rowPattern = "";
    //for (let j = 0; j < cols; j++) {
        //rowPattern += "* ";
    //}
    //console.log(rowPattern.trim()); // Print the row
    //}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.writeln("*");
    }
    document.write("<br>")
}

//2Q
//*
//* *
//* * *
//* * * *
//* * * * *

//let n = 5;
//for (let i = 1; i <= n; i++) {
//    let str = "* ";
//    console.log(str.repeat(i));
//}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i>=j){
            document.writeln("*");
        }else{
            document.writeln("&nbsp;&nbsp;");
        }    
    }
    document.write("<br>")
}


//3Q
//*   *
// * * 
//  *  
// * * 
//*   *

//const size = 5; // Size of the X pattern (must be odd)

//for (let i = 0; i < size; i++) {
//    let row = "";
//   for (let j = 0; j < size; j++) {
//        if (j === i || j === size - i - 1) {
//        row += "*";
//        } else {
//            row += " ";
//        }
//    }
//    console.log(row);
//}


for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j || i+j==6){
            document.writeln("*");
        }else{
            document.writeln("&nbsp;&nbsp;&nbsp;");
        }    
    }
    document.write("<br>")
}