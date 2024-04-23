const devs = [
    {
        id : 1,
        name : "Sakib",
        age : 18,
        skill : ["ICT","english","science"],
        profession : "student",
        result : {
            jsc : 3,
            ssc : 3.5,
            hsc : 5
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
            jsc : 3,
            ssc : 3.5,
            hsc : 5
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
            jsc : 3,
            ssc : 3.5,
            hsc : 5
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
            jsc : 3,
            ssc : 3.5,
            hsc : 5
        },
        gender : "male",
    }
]

devs.forEach((items) => {
    console.log(items.name)
})