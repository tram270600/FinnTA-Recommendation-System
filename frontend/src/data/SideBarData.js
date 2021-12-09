import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';

const SideBarData = {
    Information: [
        {
            title: "Email:",
            icon: <EmailIcon/>,
            info: "ngntram.ityu@gmail.com",
            link: "facebook.com/tramnguyengiang"
        },
        {
            title: "Phone:",
            icon: <PhoneIcon/>,
            info: "0775711266 ",
            link: "facebook.com/tramnguyengiang"
        },
        {
            title: "Social:",
            icon: <PeopleIcon/>,
            info: "facebook.com/tramnguyengiang",
            link: "facebook.com/tramnguyengiang"
        }
    ],
    User: [
        {
            name: "Uby Tram Nguyen",
            post: "100",
            follower: "100K",
            following: "400K",
            bio: "Hello everyone, my name is Uby aka Tram Nguyen, this is few thing about myself and there is some course that I am interested in"
        }
    ]
};
export default SideBarData;