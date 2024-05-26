export interface JobDetails{
    id:number,
    icon:string,
    position:string,
    location:string,
    companyName:string,
    timePosted:string,
    employmentStatus:string,
    button:{
        chapter:string,
        level:string,
        stack?:string,
        language:{
            language1:string,
            language2?:string,
            language3?:string
        }
    },
}

<<<<<<< HEAD
export interface JobPosition{
    SeniorFront:string,
    Fullstack: string,
    juniorFront: string,
    software:string,
    juniorBack: string,
    juniorDev: string,
    frontDev:string,
=======
export interface JobRequirement{
    skillRequirement:string,
>>>>>>> 463d687 (step: styling buttons in search card)
}

export interface JobLocation{
    
}