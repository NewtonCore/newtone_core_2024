import { AccountCircleOutlined, Groups, NotificationsNoneRounded, WorkOutlineOutlined } from "@mui/icons-material";
import {
  Dashboard,
  FacebookFill,
  Health,
  InstagramFill,
  Key,
  LinkedinBoxFill,
  Phone,
  TwitterFill,
  
} from "akar-icons";
import { v4 as uuidv4 } from "uuid";
import { COMPANY_ROUTE, HOME_ROUTES, TALENT_ROUTE } from "../routes/RouteLinks";

export const NAVLINKS = {
  company_left_links: [
    {
      name: "Dashboard",
      image: <Dashboard />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`,
    },

    {
      name: "Profile",
      image: <AccountCircleOutlined />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.profile}`,
    },
    {
      name: "My Jobs",
      image: <WorkOutlineOutlined />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.my_jobs}`,
    },
    {
      name: "Talents",
      image: <Groups />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.hired_talents}`,
    },

    {
      name: "Schedule a Call",
      image: <Phone />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.schedule}`,
    },
    {
      name: "Updates",
      image: <NotificationsNoneRounded />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.updates}`,
    },
    {
      name: "Change Password",
      image: <Key />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.update_password}`,
    },
  ],

  company_top_left_links: [
    {
      name: "Home",
      link: `/${HOME_ROUTES.home}`,
    },

    {
      name: "FAQ",
      link: `/${HOME_ROUTES.faqs}`,
    },

    {
      name: "Schedule a Call",
      image: <Phone />,
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.schedule}`,
    },
  ],

  company_top_right_links: [
    {
      name: "Post a Job",
      link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.post_job}`,
    },
  ],

  available_for_job_link: [
    {
      id: uuidv4(),
      name: "Available for job",
      image: <WorkOutlineOutlined />,
      link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.jobAvailability}`,
    },
  ],

  talent_left_links: [
    {
      id: uuidv4(),
      name: "Dashboard",
      image: <Dashboard />,
      link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.dashboard}`,
    },

    {
      id: uuidv4(),
      name: "Edit Profile",
      image: <AccountCircleOutlined />,
      link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`,
    },
    {
      id: uuidv4(),
      name: "My Job Status",
      image: <WorkOutlineOutlined />,
      link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.jobStatus}`,
    },
    {
      id: uuidv4(),
      name: "Tests",
      image: <Health />,
      link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.tests}`,
    },

    // {
    //   id: uuidv4(),
    //   name: "Updates",
    //   image: <NotificationsNoneRounded />,
    //   link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.updates}`,
    // },
    {
      id: uuidv4(),
      name: "Setting",
      image: <Key />,
      link: `/${TALENT_ROUTE.index}${TALENT_ROUTE.settings}`,
    },
  ],

  dashboard_talent_links: [
    {
      id: uuidv4(),
      name: "Home",
      link: `/${HOME_ROUTES.home}`,
    },

    {
      id: uuidv4(),
      name: "FAQs",
      link: `/${HOME_ROUTES.faqs}`,
    },
  ],

  dashboard_talent_right_links: [
    {
      id: uuidv4(),
      name: "Find a Job",
      link: `/${HOME_ROUTES.findjob}`,
    },
  ],

  home_page_links: [
    {
      id: uuidv4(),
      name: "Home",
      link: `/${HOME_ROUTES.home}`,
    },
    // {
    //   id: uuidv4(),
    //   name: "About",
    //   link: `/${HOME_ROUTES.about}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "FAQs",
    //   link: `/${HOME_ROUTES.faqs}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "Blog",
    //   link: `/${HOME_ROUTES.blog}`,
    // },
    {
      id: uuidv4(),
      name: "As A Company",
      link: `/${HOME_ROUTES.asCompany}`,
    },
    {
      id: uuidv4(),
      name: "As A Talent",
      link: `/${HOME_ROUTES.asTalent}`,
    },

    {
      id: uuidv4(),
      name: "Find a Job",
      link: `/${HOME_ROUTES.findjob}`,
    },
  ],
  home_page_links_logged_in: [
    // {
    //   id: uuidv4(),
    //   name: "Home",
    //   link: `/${HOME_ROUTES.home}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "About",
    //   link: `/${HOME_ROUTES.about}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "FAQs",
    //   link: `/${HOME_ROUTES.faqs}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "Blog",
    //   link: `/${HOME_ROUTES.blog}`,
    // },
    {
      id: uuidv4(),
      name: "As A Company",
      link: `/${HOME_ROUTES.asCompany}`,
    },
    {
      id: uuidv4(),
      name: "As A Talent",
      link: `/${HOME_ROUTES.asTalent}`,
    },

    
  ],

  home_page_links_logged_in_talent: [
    // {
    //   id: uuidv4(),
    //   name: "Home",
    //   link: `/${HOME_ROUTES.home}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "About",
    //   link: `/${HOME_ROUTES.about}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "FAQs",
    //   link: `/${HOME_ROUTES.faqs}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "Blog",
    //   link: `/${HOME_ROUTES.blog}`,
    // },
 
    {
      id: uuidv4(),
      name: "As A Talent",
      link: `/${HOME_ROUTES.asTalent}`,
    },

    
  ],
  
  home_page_links_logged_in_company: [
    // {
    //   id: uuidv4(),
    //   name: "Home",
    //   link: `/${HOME_ROUTES.home}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "About",
    //   link: `/${HOME_ROUTES.about}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "FAQs",
    //   link: `/${HOME_ROUTES.faqs}`,
    // },
    // {
    //   id: uuidv4(),
    //   name: "Blog",
    //   link: `/${HOME_ROUTES.blog}`,
    // },

    
 
    {
      id: uuidv4(),
      name: "As A Company",
      link: `/${HOME_ROUTES.asCompany}`,
    },

    {
      id: uuidv4(),
      name: "Jobs",
      link: `/${HOME_ROUTES.findjob}`,
    },
  ],

  home_page_footer_links_left: [
    {
      id: uuidv4(),
      name: "As a Company",
      link: `/${HOME_ROUTES.asCompany}`,
    },
    {
      id: uuidv4(),
      name: "As a Talent",
      link: `/${HOME_ROUTES.asTalent}`,
    },
    // {
    //   id: uuidv4(),
    //   name: "Blog",
    //   link: `/${HOME_ROUTES.blog}`,
    // },
    {
      id: uuidv4(),
      name: "FAQs",
      link: `/${HOME_ROUTES.faqs}`,
    },
  ],
  home_page_footer_links_right: [
    {
      id: uuidv4(),
      name: "About",
      link: `/${HOME_ROUTES.about}`,
    },
    {
      id: uuidv4(),
      name: "Privacy & Cookies Policy",
      link: `/${HOME_ROUTES.privacyPolicy}`,
    },
    {
      id: uuidv4(),
      name: "Terms & Conditions",
      link: `/${HOME_ROUTES.termsOfUse}`,
    },
    {
      id: uuidv4(),
      name: "Help & Support",
      link: "/",
    },
  ],
  social_media_links: [
    {
      id: uuidv4(),
      name: "Facebook",
      icon: <FacebookFill />,
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: <TwitterFill />,
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: <InstagramFill />,
      link: "/",
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      icon: <LinkedinBoxFill />,
      link: "https://www.linkedin.com/company/newtoncore/",
    },
  ],
};
