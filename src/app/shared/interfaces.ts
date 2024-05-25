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
        stack:string,
        language:{
            language1:string,
            language2:string,
        }
    },
}

export interface JobPosition{
    SeniorFront:string,
    Fullstack: string,
    juniorFront: string,
    software:string,
    juniorBack: string,
    juniorDev: string,
    frontDev:string,
}

export interface JobLocation{
    
}