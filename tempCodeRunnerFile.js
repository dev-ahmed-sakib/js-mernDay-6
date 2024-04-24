const devs = [
    {
        id : 1,
        name : "Sakib",
        age : 18,
        skill : ["ICT","english","science"],
        profession : "student",
        result : {
            banla : 85,
            english : 45,
            math : 65,
            science : 45,
            social : 75,
            religion : 80
        },
        gender : "male",
    },
    {
        id : 2,
        name : "Shawon",
        age : 19,
        skill : ["science","social","math"],
        profession : "student",
        result : {
            banla : 65,
            english : 75,
            math : 72,
            science : 75,
            social : 45,
            religion : 75
        },
        gender : "male",
    },
    {
        id : 3,
        name : "Onik",
        age : 20,
        skill : ["bangla","math","english"],
        profession : "student",
        result : {
            banla : 95,
            english : 56,
            math : 76,
            science : 75,
            social : 80,
            religion : 75
        },
        gender : "male",
    },
    {
        id : 4,
        name : "Sharif",
        age : 22,
        skill : ["history","management","accounting"],
        profession : "student",
        result : {
            banla : 75,
            english : 55,
            math : 60,
            science : 60,
            social : 50,
            religion : 90
        },
        gender : "male",
    }
];


let getAvarage = devs.forEach((item, index)=>{
    return avrageNumber = (item.result.banla + item.result.english + item.result.math + item.result.science + item.result.social + item.result.religion);
})
const avrageCalulator = avrageNumber / 6;

function getResult(mark){
    let gpa;
    let grade;

    if(mark >= 0 && mark < 33){
        gpa = 0;
        grade = 'F';
    }else if(mark >= 33 && mark < 40){
        gpa = 1;
        grade = 'D';
    }else if(mark >= 40 && mark < 50){
        gpa = 2;
        grade = 'C';
    }else if(mark >= 50 && mark < 60){
        gpa = 3;
        grade = 'B';
    }else if(mark >= 60 && mark < 70){
        gpa = 3.5;
        grade = 'A-';
    }else if(mark >= 70 && mark < 80){
        gpa = 4;
        grade = 'A';
    }else if(mark >= 80 && mark <= 100){
        gpa = 5;
        grade = 'A+';
    }else{
        gpa = "Wrong...!!! Enter a valid value between range 0 to 100";
        grade = "Wrong...!!! Enter a valid value between range 0 to 100";
    }
    return{
        gpa : gpa,
        grade : grade,

    }
}
console.log(getResult(avrageCalulator).grade)
