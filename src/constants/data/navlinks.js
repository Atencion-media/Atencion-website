import { FaHome,FaServicestack,FaBriefcase   } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { MdReviews } from "react-icons/md";
export const navlinks = [
    {
        id:1,
        label:"Home",
        path:"/",
        icon:<FaHome/>
    },
    {
        id:2,
        label:"About",
        path:"/about",
        icon:<GoOrganization/>
    },
    {
        id:3,
        label:"Services",
        path:"/services",
        icon:<FaServicestack/>
    },
    {
        id:4,
        label:"Case Studies",
        path:"/case-studies",
        icon:<FaBriefcase/>
    },
    {
        id:5,
        label:"Testimonials",
        path:"/testimonials",
        icon:<MdReviews/>
    },
]