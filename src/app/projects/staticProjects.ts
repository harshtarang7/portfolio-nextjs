export interface leftSideCards{
    imgUrl:string,
    title:string,
    subTitle:string,
}
export interface rightSideCars extends leftSideCards{
    link:string,
}

export const projectsData:leftSideCards[] = [
    {
        imgUrl:'/assets/projects/password.png',
        title:'Random Password Generator',
        subTitle:'Web Designing'
    },
    {
        imgUrl:'/assets/projects/react-ecom.png',
        title:'React E-commerce',
        subTitle:'Web Designing'
    },
    {
        imgUrl:'/assets/projects/e-com.png',
        title:'E-commerce JS',
        subTitle:'Web Designing'
    },
    {
        imgUrl:'/assets/projects/weather.png',
        title:'Weather Web-App',
        subTitle:'Web Designing'
    },
]

export const projectsDataRight:rightSideCars[] = [
    {
        imgUrl:'/assets/projects/nestjs.png',
        title:'NestJS + TypeORM + MYSQL',
        subTitle:'Backend Boiler Plate',
        link:'https://github.com/harshtarang7/NestJS-TypeORM-MYSQL'
    },
    {
        imgUrl:'/assets/projects/nodejs.png',
        title:'Node.js + JWT',
        subTitle:'Backend',
        link:'https://github.com/harshtarang7/nodejs-jwt-'
    },
    {
        imgUrl:'/assets/projects/e-com.png',
        title:'OTP Verification',
        subTitle:'Full-Stack web-APP',
        link:'https://github.com/harshtarang7/otp-verification'
    },
    {
        imgUrl:'/assets/projects/reactjs.png',
        title:'React Web-App',
        subTitle:'React App (mixed with different components)',
        link:'https://github.com/harshtarang7/react-js-daily'
    },
]