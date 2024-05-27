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

export interface JobRequirement{
    skillRequirement:string,
}

export interface JobLocation{
    
}