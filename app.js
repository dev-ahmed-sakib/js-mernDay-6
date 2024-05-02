// // instagram post design //
// const insta_post = [{
//      author : {
//         // Author personal information 
//         name : "HM Nayem",
//         bio : " Author, Entrepreneur & Full-stack Engineer",
//         profile : "https://media.licdn.com/dms/image/C5603AQECb8HFBDNXRw/profile-displayphoto-shrink_800_800/0/1641607695503?e=1720051200&v=beta&t=V-vK_qd4g9ePCMUWXfPr0pAr2qraZLDk7CxlW_j8cJc"
//      },
//      p_content : {
//         // Author uploaded content
//         caption : "মোহাম্মদপুর বাস স্ট্যান্ডের পাশে একটা দোকানে কম্পিউটার অপারেটরের কাজ করে উপার্জন করেছিলাম। এই ধরেন কম্পোজ করা, ছবি এডিট করা, বিভিন্ন অ্যাপ্লিকেশন ফর্ম ফিলাপ করা এই ধরনের কাজ করতাম। আর বাকি সময় দোকানে বসেই প্রোগ্রামিং করতাম। তখন জানতামও না প্রোগ্রামিং আমাকে কি দিবে। ভালো লাগতো, তাই প্রোগ্রামিং নিয়ে পরে থাকতাম। আর প্রোগ্রামিং অনেক আগেই আমাকে আট ডিজিটের ঘরে পৌঁছে দিয়েছে 😀",
//         post_Upload : "https://media.licdn.com/dms/image/D5622AQFYvQV6_Rfp_g/feedshare-shrink_800/0/1713798283299?e=1717632000&v=beta&t=RXV2Sg7HfFfNmDl6pmKZwDIP1oJ-2FYztQDSJ6ImsO8" 
//      },
//      reaction : {
//         // Author post reaction
//         likes : 720,
//         celebrate : 105,
//         support : 54,
//         love : 158,
//         insignthful : 85,
//         funny : 2
//      },
//      comments : [
//         {
//         // Author comments sections
//             id : 1,
//             name : "Md Rakibul Islam Rakib",
//             profile : "https://media.licdn.com/dms/image/D4D03AQGUmM5ndC7nCw/profile-displayphoto-shrink_100_100/0/1695041920558?e=1720051200&v=beta&t=9yNt3VKxXgxEgeiesjm3G5HW-B2fluzQO4Cis_s2Pe0",
//             bio : "Full Stack Web Developer",
//             comments_time_count : "3rd+",

//             comments_content : `
//             Those of us who work hard and come from middle-class or lower-middle-class families understand the challenges life can bring. At first, even small amounts of income can seem significant. Yet, with time, those small amounts add up, gradually leading us towards greater financial stability.

//             Many blessings and best wishes to you, brother. 🤲`,
//         },
//         {
//             id : 2,
//             name : "Mostafizur Rahman",
//             profile : "https://media.licdn.com/dms/image/D4D03AQGUmM5ndC7nCw/profile-displayphoto-shrink_100_100/0/1695041920558?e=1720051200&v=beta&t=9yNt3VKxXgxEgeiesjm3G5HW-B2fluzQO4Cis_s2Pe0https://media.licdn.com/dms/image/D5603AQFywRhVkfu-cA/profile-displayphoto-shrink_100_100/0/1702878827237?e=1720051200&v=beta&t=p4umcbHZhkeaLdind79-x1vxPXXnKchaGXGAj8C7vI8",
//             bio : "MERN Stack Developer || Full Stack Web Developer || Software Developer",
//             comments_time_count : "3rd+",

//             comments_content : `Thank you for sharing your inspiration. It's a great journey for you.`,
//         },
//         {
//             id : 3,
//             name : "BM Khalid Hasan",
//             profile : "https://media.licdn.com/dms/image/D5603AQHOwIiZcmDreg/profile-displayphoto-shrink_100_100/0/1702485562190?e=1720051200&v=beta&t=dIcVyyPxbOWUK-vHNqRBBx2wYUWz78CRE87H1T-0QM4",
//             bio : "Content Writer | Copywriter | Content Creator | Content Executive | Screen Writer | Director | Presenter",
//             comments_time_count : "3rd+",

//             comments_content : `You are living inspiration. Keep up the good work.`,
//         }
//     ]
// }]

// // post comment content data showing
// let getOutput = insta_post.map(items => items.comments[2].comments_content)

// // Output
// console.table(insta_post)
































// object inside empty values pushed from outside //
// const facebook_post = [{
//     author : {
//         name : "Muhammad Sakibul Islam",
//         author_profile : "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-1/361943361_825238125785234_8812670503348895188_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fZFrITmYd3YAb5GBoub&_nc_ht=scontent.fdac144-1.fna&oh=00_AfCt4vj54363ZR4lprLIM8RPozwZsElGO3tIOe4StrK7kA&oe=6635FD8F",
//         acLink : "https://www.facebook.com/dev.sakibul",
//     },

//     post_caption : "Eid Mubarak__💙" + "P-Credit : MD Shariful Islam",
//     post_content : "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/434844966_968563291452716_6832987968046012566_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IOyExxykrRwAb4CbMuc&_nc_ht=scontent.fdac144-1.fna&oh=00_AfApV5UOzp_xIEI2kd03Jv0RLZj245rU8WhQRf03oyF3rg&oe=66361FC6",

//     post_reaction : ["like", "love", "care", "angry", "wow", "sad"],
    
//     post_comment : [
//         {
//         cmt_author_id : 1,
//         cmt_author_name : "Rifat Ahmed",
//         cmt_author_content : "Mobarak",
//         cmt_author_reaction : ["like", "love", "care", "angry", "wow", "sad"],

//         cmt_author_reply : [] 
//         }
//     ]
// }]



// if(facebook_post[0].author.name === "Muhammad Sakibul Islam"){
//     facebook_post[0].post_comment[0].cmt_author_reply.push({
//         author : {
//             name : "Muhammad Sakibul Islam",
//             author_profile : "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-1/361943361_825238125785234_8812670503348895188_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fZFrITmYd3YAb5GBoub&_nc_ht=scontent.fdac144-1.fna&oh=00_AfCt4vj54363ZR4lprLIM8RPozwZsElGO3tIOe4StrK7kA&oe=6635FD8F",
//             acLink : "https://www.facebook.com/dev.sakibul",
//         }
//     })

// }else{
//     console.log(false)
// }

// // console.log(facebook_post[0].post_comment[0].cmt_author_reply)
// console.log(facebook_post)


// // facebook_post[0].post_comment[0].cmt_author_reply[0].replyedUser_name === []

// // facebook_post[0].post_comment[0].cmt_author_reply[0].acLink






































// // ------ Create a complete Developer array and object data structure with monthly income. And search devs by stack, location, income, age ------ //

// const devs = [
//     {   
//         id : 1,
//         name : "sakib",
//         age : 19,
//         skill : "mern",
//         monthlyEarning : "$2000",
//         location : "chattogram",
        
//     },
//     {
//         id : 2,
//         name : "onik",
//         age : 20,
//         skill : "Ios",
//         monthlyEarning : "$3000",
//         location : "chattogram",
        
//     },
//     {
//         id : 3,
//         name : "Khairul",
//         age : 19,
//         skill : "wordPress",
//         monthlyEarning : "$1500",
//         location : "Dhaka",
        
//     },
//     {
//         id : 4,
//         name : "hridoy",
//         age : 22,
//         skill : "java",
//         monthlyEarning : "$2000",
//         location : "chattogram",
        
//     },
//     {
//         id : 5,
//         name : "sabbir",
//         age : 21,
//         skill : "website",
//         monthlyEarning : "$1500",
//         location : "Dhaka",
        
//     },
//     {
//         id : 7,
//         name : "mamun",
//         age : 20,
//         skill : "mern",
//         monthlyEarning : "$2500",
//         location : "Dhaka",
        
//     },
//     {
//         id : 8,
//         name : "shawon",
//         age : 19,
//         skill : "webDesign",
//         monthlyEarning : "$1000",
//         location : "chattogram",
        
//     }
// ]

// const getResult = devs.filter(item => item.age >= 19 && item.skill === "mern").map((item)=>{
//     return `Devs Name : ${item.name}, his age : ${item.age},  skill : ${item.skill}, monthly imcome : ${item.monthlyEarning}, location ${item.location}\n, `
// })

// console.log(getResult)

































// ------ Create a complete Developer array and object data structure with monthly income. And search devs by stack, location, income, age ------ //



































// find objective insider index number //
// const obj = [
//     {
//         name : "Sakib", 
//         age : 19, 
//         skill : {js : "begineer", html : "intermidiate", css : 50}
//     },
//     {
//         name : "Onik", 
//         age : 21, 
//         skill : "mern",
//     },
//     {
//         name : "Amdad", 
//         age : 20, 
//         skill : "mern",
//     },
//     {
//         name : "Shawon", 
//         age : 21, 
//         skill : "mern",
//     }
// ]

// // let getValue = obj.indexOf(obj.find(item => item.age === 21))
// let getValue = obj.findIndex(item => item.skill === "mern");

// console.log(getValue)



























// const obj = [
//     {
//         name : "Sakib", 
//         age : 19, 
//         skill : {js : "begineer", html : "intermidiate", css : 50}
//     },
//     {
//         name : "Onik", 
//         age : 21, 
//         skill : "mern"
//     },
//     {
//         name : "Amdad", 
//         age : 20, 
//         skill : "mern"
//     },
//     {
//         name : "Shawon", 
//         age : 21, 
//         skill : "mern"
//     }
// ]


// obj[0].name = "noman";
// obj[0].age = 19;
// obj[0].skill = {js : "basic", html : "mid range", css : "70"}

// obj.forEach((item)=>{
//     console.log(item.name)
// })


























// distructue object value access with making as a variable // 
// const obj = [
//     {
//     name : "Sakib", 
//     age : 19, 
//     skill : {js : "begineer", html : "intermidiate", css : 50}
//     }
// ]

// const NewObj = [
//     {
//     name : "Onik", 
//     age : 20, 
//     skill : {js : "basic range", html : "mid range", css : 60}
//     }
// ]

// const {name,age, skill : {html}} = obj[0];

// console.log(name,age,html)

// const {name : naam, age: boyosh, skill: joggota} = NewObj[0];

// console.log(naam, boyosh, joggota)


// obj.forEach((item)=>{
//     console.log(item.name)
// })










// reduce with push in mt value //
// const acc = [10,20,30,40,50,60,70,80,90,100]
// const value = []

// let getVal = acc.reduce((previus, corrent)=>{

//     let out = previus = corrent;
//     value.push(out)

//     return out;
// },[])

// console.log(value)









// fill whole array using fill() method
// // const arr = ["noman", "sakib", "onik", "sharif", "sagor", "roni", "sharif", "asif"]
// const arr = [true, true, true]
// console.log(arr)
// console.log(arr.fill(false))







// ever and some method //
// const arr = [
//     {
//     name : "Sakib", 
//     age : 19, 
//     skill : "mern"
//     },
//     {
//     name : "Onik", 
//     age : 21, 
//     skill : "mern"
//     },
//     {
//     name : "Amdad", 
//     age : 20, 
//     skill : "mern"
//     },
//     {
//     name : "Shawon", 
//     age : 21, 
//     skill : "mern"
//     }
// ]

// // let getValue = arr.every(item => item.age >= 21)

// console.log(arr.at("Sakib"))


























// for in and for of //
// // const arr = ["Sakib", "Onik", 1,2,3,4,5,6,7,8,9,9]

// const obj = {
//     name : 'sakib',
//     age : '19',
//     pc : {
//         ram : 16,
//         ssd : 256,
//         os : "windows"
//     }
// }

// for(let getValue in obj.pc){
//     console.log(obj.pc[getValue])
// }



























// const devs = [
//     {
//         id : 1,
//         name : "Sakib",
//         age : 18,
//         skill : ["ICT","english","science"],
//         profession : "student",
//         result : {
//             banla : 85,
//             english : 45,
//             math : 65,
//             science : 45,
//             social : 75,
//             religion : 80
//         },
//         gender : "male",
//     },
//     {
//         id : 2,
//         name : "Shawon",
//         age : 19,
//         skill : ["science","social","math"],
//         profession : "student",
//         result : {
//             banla : 65,
//             english : 75,
//             math : 72,
//             science : 75,
//             social : 45,
//             religion : 75
//         },
//         gender : "male",
//     },
//     {
//         id : 3,
//         name : "Onik",
//         age : 20,
//         skill : ["bangla","math","english"],
//         profession : "student",
//         result : {
//             banla : 95,
//             english : 56,
//             math : 76,
//             science : 75,
//             social : 80,
//             religion : 75
//         },
//         gender : "male",
//     },
//     {
//         id : 4,
//         name : "Sharif",
//         age : 19,
//         skill : ["history","management","accounting"],
//         profession : "student",
//         result : {
//             banla : 85,
//             english : 90,
//             math : 81,
//             science : 96,
//             social : 84,
//             religion : 85
//         },
//         gender : "male",
//     },
//     {
//         id : 5,
//         name : "Sharif",
//         age : 25,
//         skill : ["history","management","accounting"],
//         profession : "student",
//         result : {
//             banla : 85,
//             english : 40,
//             math : 90,
//             science : 96,
//             social : 86,
//             religion : 85
//         },
//         gender : "male",
//     }
// ];



// function calculateGPA(mark) {
//     if (mark >= 0 && mark < 33) {
//         return 0;
//     } else if (mark >= 33 && mark < 40) {
//         return 1;
//     } else if (mark >= 40 && mark < 50) {
//         return 2;
//     } else if (mark >= 50 && mark < 60) {
//         return 3;
//     } else if (mark >= 60 && mark < 70) {
//         return 3.5;
//     } else if (mark >= 70 && mark < 80) {
//         return 4;
//     } else if (mark >= 80 && mark <= 100) {
//         return 5;
//     } else {
//         return "Invalid Mark";
//     }
// }

// const userGPAs = devs.map(dev => {
//     const totalMarks = Object.values(dev.result).reduce((acc, curr) => acc + curr, 0);
//     const average = totalMarks / Object.keys(dev.result).length;
//     const gpa = calculateGPA(average);
//     return { 
//         name: dev.name,
//         gpa : gpa, 
//         totalMarks : totalMarks,
        
//     };
// });

// userGPAs.forEach((item)=>{
//     console.log(` name : '${item.name}',\n Number : ${item.totalMarks} \n gpa : ${item.gpa}\n`)
// })

// user input //
















// const devs = [
//     {
//         id : 1,
//         name : "Sakib",
//         age : 18,
//         skill : ["ICT","english","science"],
//         profession : "student",
//         result : {
//             banla : 85,
//             english : 45,
//             math : 65,
//             science : 45,
//             social : 75,
//             religion : 80
//         },
//         gender : "male",
//     },
//     {
//         id : 2,
//         name : "Shawon",
//         age : 19,
//         skill : ["science","social","math"],
//         profession : "student",
//         result : {
//             banla : 65,
//             english : 75,
//             math : 72,
//             science : 75,
//             social : 45,
//             religion : 75
//         },
//         gender : "male",
//     },
//     {
//         id : 3,
//         name : "Onik",
//         age : 20,
//         skill : ["bangla","math","english"],
//         profession : "student",
//         result : {
//             banla : 95,
//             english : 56,
//             math : 76,
//             science : 75,
//             social : 80,
//             religion : 75
//         },
//         gender : "male",
//     },
//     {
//         id : 4,
//         name : "Sharif",
//         age : 22,
//         skill : ["history","management","accounting"],
//         profession : "student",
//         result : {
//             banla : 75,
//             english : 55,
//             math : 60,
//             science : 60,
//             social : 50,
//             religion : 90
//         },
//         gender : "male",
//     }
// ];


// let getAvarage = devs.forEach((item, index)=>{
//     return avrageNumber = (item.result.banla + item.result.english + item.result.math + item.result.science + item.result.social + item.result.religion);
// })
// const avrageCalulator = avrageNumber / 6;

// function getResult(mark){
//     let gpa;
//     let grade;

//     if(mark >= 0 && mark < 33){
//         gpa = 0;
//         grade = 'F';
//     }else if(mark >= 33 && mark < 40){
//         gpa = 1;
//         grade = 'D';
//     }else if(mark >= 40 && mark < 50){
//         gpa = 2;
//         grade = 'C';
//     }else if(mark >= 50 && mark < 60){
//         gpa = 3;
//         grade = 'B';
//     }else if(mark >= 60 && mark < 70){
//         gpa = 3.5;
//         grade = 'A-';
//     }else if(mark >= 70 && mark < 80){
//         gpa = 4;
//         grade = 'A';
//     }else if(mark >= 80 && mark <= 100){
//         gpa = 5;
//         grade = 'A+';
//     }else{
//         gpa = "Wrong...!!! Enter a valid value between range 0 to 100";
//         grade = "Wrong...!!! Enter a valid value between range 0 to 100";
//     }
//     return{
//         gpa : gpa,
//         grade : grade,

//     }
// }
// console.log(getResult(avrageCalulator).grade)


// const devs = [
//     {
//         id : 1,
//         name : "Sakib",
//         age : 18,
//         skill : ["ICT","english","science"],
//         profession : "student",
//         result : {
//             jsc : 3,
//             ssc : 3.5,
//             hsc : 5
//         },
//         gender : "male",
//     },
//     {
//         id : 2,
//         name : "Shawon",
//         age : 19,
//         skill : ["science","social","math"],
//         profession : "student",
//         result : {
//             jsc : 3,
//             ssc : 3.5,
//             hsc : 5
//         },
//         gender : "male",
//     },
//     {
//         id : 3,
//         name : "Onik",
//         age : 20,
//         skill : ["bangla","math","english"],
//         profession : "student",
//         result : {
//             jsc : 3,
//             ssc : 3.5,
//             hsc : 5
//         },
//         gender : "male",
//     },
//     {
//         id : 4,
//         name : "Sharif",
//         age : 22,
//         skill : ["history","management","accounting"],
//         profession : "student",
//         result : {
//             jsc : 3,
//             ssc : 3.5,
//             hsc : 5
//         },
//         gender : "male",
//     }
// ]

// devs.forEach((items) => {
//     console.log(items.name)
// })