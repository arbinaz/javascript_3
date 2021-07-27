function grade(p){
    switch(true){
        case p<35:
            console.log("Fail")
            break;
        case p>=35 && p<60:
            console.log("Second class")
            break;
        case p>=60 && p<80:
            console.log("First class")
            break;
        case p>80:
            console.log("Distinction")
            break;
         default:
            console.log("Unable to compute")
            break;      
    }
}
grade(79);