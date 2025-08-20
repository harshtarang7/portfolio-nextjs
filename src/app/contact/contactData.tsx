import { Call, ContactMail, LocationPin } from "@mui/icons-material";

export interface contactDataInterface{
    mainTitle:string,
    subTitle1:string;
    icon:React.ReactNode;
    subTitle2?:string;

}
export const ContactData:contactDataInterface[] = [
    {
        mainTitle:'Mail Me',
        subTitle1:'tarangharsh7@gmail.com',
        icon:<ContactMail sx={{fontSize:'3rem'}}/>,
        subTitle2:'harshtarang7@gmail.com'
    },
    {
        mainTitle:'Contact Me',
        subTitle1:'+91 6378089879 ',
        icon:<Call sx={{fontSize:'3rem'}}/>
    },
    {
        mainTitle:'Location',
        subTitle1:'Inside old city, Jodhpur, Rajasthan, India',
        icon:<LocationPin sx={{fontSize:'3rem'}}/>
    },
]