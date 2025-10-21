let course = "CS 2250";

if(course.toLocaleLowerCase()=='cs 2250'){
    console.log("web development");
} else if(course.toLocaleLowerCase()=='cs 4800'){
    console.log("sofrware egineer");
} else if(course.toLocaleLowerCase() =='cs 3310'){
    console.log(algorithm);
} else if(course.toLocaleLowerCase() == 'cs 4310'){
    console.log(database);
} else{
    console.log("other courses.");
    
}



switch (course.toLocaleLowerCase()){
    case "cs 2250":
        console.log("web developement");
        break;
    case "cs 4800":
        console.log("software engineer")
        break;
    case "cs 3310":
        console.log("algorithm");
        break;
    case "cs 4310":
        console.log("database");
        break;
    default:
        console.log("other courses.");
        
        
        
        
        
}