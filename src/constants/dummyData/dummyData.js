import {
  BUILDING_IMG,
  CONTAINER_IMG1,
  CONTAINER_IMG2,
  CONTAINER_IMG3,
  CREATIVITY_IMAGE,
  LADY_YELLOW_IMAGE,
  MYTH_IMAGE,
} from "../AppImages";
import {
  APPROVAL_SVG,
  BICODE_SVG,
  CARBON_USER_SVG,
  DJANGO_SVG,
  EXPERIECE_SVG,
  FB_SVG,
  FLASK_SVG,
  FLUENT_PEOPLE_TEAM_SVG,
  FLUENT_SVG,
  FLUENT_TOP_SPEED_SVG,
  GO_SVG,
  HEALTH_SVG,
  JAVA_SVG,
  JS_SVG,
  LARAVEL_SVG,
  LINKEDIN_SVG,
  LOCATION_SVG,
  MISSION_SVG,
  MONEY_SVG,
  NODEJS_SVG,
  PAYMENT_SVG,
  PERSON_SVG,
  PYTHON_SVG,
  REACT_SVG,
  SWIFT_SVG,
  TEAM_SVG,
  TECH_STACK_SVG,
  TELEGRAM_SVG,
  TWITTER_SVG,
  TYPESCRIPT_SVG,
  VISION_SVG,
  WHATSAPP_SVG,
} from "../AppSvg";
import { v4 as uuidv4 } from "uuid";

export const DUMMY_DATA = {
  skill_results: [
    {
      skill__id: uuidv4(),
      skill__name: "",
      count: 2,
      "last-trial": new Date(),
      status:"passed"

    },
    {
      skill__id: uuidv4(),
      skill__name: "",
      count: 1,
      "last-trial": new Date(),
      status:"passed"
    },
  ],
  jobs: [
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
    {
      title: "Python Developer",
      timeline: "Full-time",
      date: "June 20, 2021",
      location: "Lagos",
      price_amount: "$50,000 - 80,000 / annum",
    },
  ],

  skills: [
    {
      name: "Python",
      image: PYTHON_SVG,
    },
    {
      name: "Java",
      image: JAVA_SVG,
    },
    {
      name: "Django",
      image: DJANGO_SVG,
    },

    {
      name: "JavaScript",
      image: JS_SVG,
    },
    {
      name: "Golang",
      image: GO_SVG,
    },
    {
      name: "Golang (GO)",
      image: GO_SVG,
    },
    {
      name: "Flask",
      image: FLASK_SVG,
    },

    {
      name: "ReactJs",
      image: REACT_SVG,
    },
    {
      name: "Laravel",
      image: LARAVEL_SVG,
    },

    {
      name: "NodeJS",
      image: NODEJS_SVG,
    },
    {
      name: "TypeScript",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Swift",
      image: SWIFT_SVG,
    },
    {
      name: "C++",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "C#",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "HTML and CSS",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "NodeJS",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "AWS",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "PostgreSQL",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "React Native",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "PHP",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Laravel",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "AWS",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Ruby on Rails",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Angular",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Android",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "iOS",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "AI/ML",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Angular/Node",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "Laravel",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "MySQL",
      image: TYPESCRIPT_SVG,
    },
    {
      name: "ASP .NET",
      image: TYPESCRIPT_SVG,
    },
  ],

  jobdDesc: [
    {
      id: uuidv4(),

      title: "Tech position",
      desc: "Front-end, Back-end, Full-stack- we have tests and opportunities for you.",
      image: TECH_STACK_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),

      title: "Years of Experience",
      desc: "Entry-level, Mid-level or senior developers- There’s a job for you.",
      image: EXPERIECE_SVG,
      color: "primary",
    },
    {
      id: uuidv4(),

      title: "Location",
      desc: "Our pool of developers are from cities all over the world. Distance is not a barrier.",
      image: LOCATION_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),

      title: "Availability",
      desc: "You have the choice of Full-time or Part-time working opportunity.",
      image: PERSON_SVG,
      color: "primary",
    },
  ],

  whyWorkWithUs: [
    {
      id: uuidv4(),
      title: "100% remote",
      desc: "Work with a limitless team from anywhere in the world.",
      image: TEAM_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),
      title: "Full and attractive compensations",
      desc: "Get paid with an higher-than U.S standard minimum wage every hour.",
      image: PAYMENT_SVG,
      color: "primary",
    },
    {
      id: uuidv4(),

      title: "Expert guided CV reviews",
      desc: "We have experts to review your C.V so as to make your skill marketable.",
      image: APPROVAL_SVG,
      color: "secondary",
    },
  ],

  visionMission: [
    {
      id: uuidv4(),
      title: "Vision",
      desc: "To create a world where hiring is equitable, proficient, and transparent. We envision a world where tech roles in all companies are rapidly filled with deeply vetted talents, and where the increasing demand for developers meet its supply.",
      image: VISION_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),

      title: "Mission",
      desc: "To empower connections between talented developers all over the world with fitting companies for their skills. We use AI, data, and deep-dive technology to reinvent hiring.",
      image: MISSION_SVG,
      color: "primary",
    },
  ],

  guaranteeDesc: [
    {
      id: uuidv4(),
      title: "AI-Driven matches",
      desc: "Get talents the way you like with our customizable and flexible job-matching solution.",
      image: CARBON_USER_SVG,
      color: "primary",
    },
    {
      id: uuidv4(),
      title: "Speedy recruitment",
      desc: "Say goodbye to lengthy and stressful hiring processes. Get ahead of schedule by trusting us with your recruitment solutions.",
      image: FLUENT_TOP_SPEED_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),
      title: "Build stronger teams",
      desc: "You can trust us for teams that drive success. Build a strong, efficient, and driven team that match your company’s goals.",
      image: FLUENT_PEOPLE_TEAM_SVG,
      color: "primary",
    },

    {
      id: uuidv4(),

      title: "Save cost",
      desc: "Save costs by hiring from our already vetted team of developers rather than hiring in-house.",
      image: MONEY_SVG,
      color: "secondary",
    },
  ],

  whyChooseNewton: [
    {
      id: uuidv4(),
      title: "Exceptional Talent Pool",
      desc: "Our rigorous selection process guarantees that only the best software developers join our network. When you choose a developer from Newton International, you're tapping into a reservoir of talent that has been proven to deliver exceptional results time and again.",
      image: CARBON_USER_SVG,
      color: "primary",
    },
    {
      id: uuidv4(),
      title: "Diverse Expertise",
      desc: "From seasoned industry veterans to emerging tech prodigies, our talent network covers a wide spectrum of expertise. No matter the scale or complexity of your project, we have a developer who can exceed your expectations.",
      image: FLUENT_TOP_SPEED_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),
      title: "Efficiency and Speed",
      desc: "In the fast-paced world of technology, time is of the essence. Our platform streamlines the hiring process, matching you with developers quickly and efficiently, so you can embark on your projects without unnecessary delays.",
      image: FLUENT_PEOPLE_TEAM_SVG,
      color: "primary",
    },

    {
      id: uuidv4(),

      title: "Global Perspective",
      desc: "Innovation knows no borders, and neither do we. Our global talent pool brings fresh perspectives and diverse approaches to problem-solving, enriching your projects and driving innovation to new horizons.",
      image: MONEY_SVG,
      color: "secondary",
    },
    {
      id: uuidv4(),

      title: "Long-Term Partnerships",
      desc: "At Newton International, we're not just interested in one-time transactions. We're invested in building lasting partnerships between developers and companies. When you employ a developer through us, you're setting the foundation for long-term success.",
      image: MONEY_SVG,
      color: "secondary",
    },
    
  ],

  loginRoles: [
    {
      id: 2,
      name: "As A Talent",
      radioName: "loginRoles",
      checked: null,
    },
    {
      id: 1,
      name: "As a company",
      radioName: "loginRoles",
      checked: null,
    },
  ],
  blogContent: [
    {
      title: "12 Relevant Skills To Have in Design",
      image: CREATIVITY_IMAGE,
      date: "January 20, 2021",
    },
    {
      title: "4 Harmful myths that Harm Cats",
      image: MYTH_IMAGE,
      date: "January 20, 2021",
    },
    {
      title: "The State of Learning And Development",
      image: LADY_YELLOW_IMAGE,
      date: "January 20, 2021",
    },

    {
      title: "The State of Learning And Development",
      image: BUILDING_IMG,
      date: "January 20, 2021",
    },
  ],

  whatWeDo: [
    {
      title: "Matching talents to jobs",
      desc: "Do you desire to have to work remotely or on-site? Whatever your choice, our platform is able to match you to your desired jobs.  Our advanced AI algorithm would match you to jobs based on your skills, experiences, and overall job preferences.",
      image: TECH_STACK_SVG,
    },
    {
      title: "Handling Talent Recruitment",
      desc: "We understand how draining it is to get the right candidates. We are here to relieve you of your stress and bring the candidates that match your requirements effortlessly. Whether you want to advertise a job or get qualified talents from our database, we have you all covered. You can be sure about quality service.",
      image: TECH_STACK_SVG,
    },
    {
      title: "Career Guidance and Resources",
      desc: "We provide guidance to talents seeking to land a job. Our up-to-date resources keep you in the know about the latest trends and how to remain indispensable in your workplace.",
      image: TECH_STACK_SVG,
    },
  ],

  whyCompaniesChooseNewton:[
    {
      id: uuidv4(),
      title: "Speed",
      image: TECH_STACK_SVG,
      desc:"Get your team running in just 5 working days"
    },
    {
      id: uuidv4(),
      title: "Time",
      image: TECH_STACK_SVG,
      desc:"Shorten your interview process by 70%"

    },
    {
      id: uuidv4(),
      title: "Engagement",
      image: TECH_STACK_SVG,
      desc:"Get 100% engagement worth your pay"

    }
  ],
  ourTeam: [
    {
      name: "",
      image: CONTAINER_IMG1,
      message: "",
      linkedId: "",
    },
    {
      name: "",
      image: CONTAINER_IMG2,
      message: "",
      linkedId: "",
    },
    {
      name: "",
      image: CONTAINER_IMG3,
      message: "",
      linkedId: "",
    },

    {
      name: "",
      image: CONTAINER_IMG3,
      message: "",
      linkedId: "",
    },
  ],
  tests: [
    {
      id: uuidv4(),
      label:
        "This would be based on the skills you have entered by the user. (Teck Stack Test (TST)), a General Coding Test, and a Job Experience Test (JET)",
      children: [
        {
          name: "Tech Stack Test (TST)",
          isStarted: false,
          icon: FLUENT_SVG,
          duration: 45,
          recording: true,
        },
        {
          name: "General Coding Test (GCT)",
          isStarted: false,
          icon: BICODE_SVG,
          duration: 30,
          recording: true,
        },
        {
          name: "Job Experience Test (JET)",
          isStarted: false,
          icon: HEALTH_SVG,
          duration: 30,
          recording: true,
        },
      ],
      defaultImages: {
        "Tech Stack Test (TST)": FLUENT_SVG,
        "General Coding Test (GCT)": BICODE_SVG,
        "Job Experience Test (JET)": HEALTH_SVG,
      },
    },
  ],

  talent_jobs: [
    {
      job_title: "Python Developer",
      job_salary: "Advised Salary: $39,000.00",
      applied_date: "June 20, 2022",
      expiry_date: "May 6, 2023",
      status: "In Review",
      job_offer: "Offer Given",
      id: uuidv4(),
    },
    {
      job_title: "DevOps Engineer",
      job_salary: "Advised Salary: $39,000.00",
      applied_date: "June 20, 2022",
      expiry_date: "May 6, 2023",
      status: "In Review",
      job_offer: "No Offer",
      id: uuidv4(),
    },
    {
      job_title: "Software Engineer",
      job_salary: "Advised Salary: $39,000.00",
      applied_date: "June 20, 2022",
      expiry_date: "May 6, 2023",
      status: "In Review",
      job_offer: "No Offer",
      id: uuidv4(),
    },
    {
      job_title: "Software Engineer",
      job_salary: "Advised Salary: $39,000.00",
      applied_date: "June 20, 2022",
      expiry_date: "May 6, 2023",
      status: "In Review",
      job_offer: "No Offer",
      id: uuidv4(),
    },
  ],

  graphData: [
    {
      name: "Page A",
      uv: 65,
    },
    {
      name: "Page B",
      uv: 60,
    },
    {
      name: "Page C",
      uv: 25,
    },
    {
      name: "Page D",
      uv: 39,
    },
    {
      name: "Page E",
      uv: 25,
    },
    {
      name: "Page F",
      uv: 45,
    },
    {
      name: "Page G",
      uv: 90,
    },
    {
      name: "Page H",
      uv: 10,
    },
    {
      name: "Page I",
      uv: 85,
    },
    {
      name: "Page J",
      uv: 45,
    },
    {
      name: "Page K",
      uv: 40,
    },
    {
      name: "Page L",
      uv: 60,
    },
    {
      name: "Page M",
      uv: 56,
    },
    {
      name: "Page N",
      uv: 21,
    },
  ],
  talent_overview: [
    {
      id: uuidv4(),
      label: "Gender",
    },
    {
      id: uuidv4(),
      label: "Email",
    },
    {
      id: uuidv4(),
      label: "Phone number",
    },
    {
      id: uuidv4(),
      label: "Qualification",
    },
    {
      id: uuidv4(),
      label: "Experience",
    },
  ],

  job_overview: [
    {
      id: uuidv4(),
      label: "Date Posted",
    },
    {
      id: uuidv4(),
      label: "Job Type",
    },
    {
      id: uuidv4(),
      label: "Job Mode",
    },
    {
      id: uuidv4(),
      label: "Job Location",
    },

    {
      id: uuidv4(),
      label: "Work Authorization",
    },
    // {
    //   id: uuidv4(),
    //   label: "Offered Salary",
    // },
    {
      id: uuidv4(),
      label: "Expiration Date",
    },
    {
      id: uuidv4(),
      label: "Qualification",
    },
    {
      id: uuidv4(),
      label: "Experience",
    },
  ],
  REFERAL_ICONS: [
    {
      name: "Whatsapp",
      image: WHATSAPP_SVG,
    },
    {
      name: "Facebook",
      image: FB_SVG,
    },
    {
      name: "LinkedIn",
      image: LINKEDIN_SVG,
    },
    {
      name: "Twitter",
      image: TWITTER_SVG,
    },
    {
      name: "Telegram",
      image: TELEGRAM_SVG,
    },
  ],
  SCHEDULE_TIMES: [
    {
      id: uuidv4(),
      label: "9:00 AM",
    },
    {
      id: uuidv4(),
      label: "11:00 AM",
    },
    {
      id: uuidv4(),
      label: "12:30 AM",
    },
    {
      id: uuidv4(),
      label: "1:00 PM",
    },
    {
      id: uuidv4(),
      label: "3:00 PM",
    },
    {
      id: uuidv4(),
      label: "3:30 PM",
    },
    {
      id: uuidv4(),
      label: "4:15 PM",
    },
  ],

  SKILL_TYPES: ["all", "simple", "technical"],
  FAQS: [
    {
      company: [
        {
          id: uuidv4(),
          title: "How do you ensure the quality of the candidates you present",
          content:
            "Talents matched with companies are well-rounded. We give standard tests and also monitor the tests with screen recording capabilities. Hence, the tests show the real ability of the talents. The talents are also evaluated based on their professional background, qualification and experience. Companies are allowed to go through the recording but recordings are only available in our system for one week after the tests are taken and then deleted.",
        },

        {
          id: uuidv4(),
          title: "What is the process to hire a developer through Newton",
          list_one: [
            "Tell us the skills you need. You’ll be able to schedule a call where a Newton tech lead will listen to you and understand your requirements.",
            "Our AI-powered Talent Cloud finds the finest fit for your hiring needs. You will get a list of pre-vetted candidates within days.",
            "Schedule interviews at your convenience. Select and meet the developers you would like to interview.",
            "Begin working with our developers after onboarding to your team.",
          ],
        },

        {
          id: uuidv4(),
          title:
            "How long does it take from submitting a request and the onboarding process",
          content: "You can fill in a position within 5-10 working days.",
        },

        {
          id: uuidv4(),
          title: "Does Newton offer full-time engagements only",
          content:
            "Based on your requests, we offer full-time, part-time and contract engagements.",
        },

        {
          id: uuidv4(),
          title:
            "Can I add extra screening questions to ensure the developers shares our values",
          content:
            "Yes, you can. Our AI matching system is able to take your companys needs and match them specifically to your needs",
        },

        {
          id: uuidv4(),
          title: "Can I hire developers to fit into any skill",
          content: "Yes, you can.",
        },

        {
          id: uuidv4(),
          title: "How does Newton source candidates",
          content:
            "Candidates who are registered on our platform have to take tests based on the skills they specified proficiency, referred to as a Tech Stack Test (TST), a General Coding Test (GCT) and a Job Experience Test (JET). We ensure that candidates that are matched to a company match the requirements specified by the company.",
        },

        {
          id: uuidv4(),
          title: "Are all developers English-proficient",
          content:
            "All our developers can communicate proficiently in English language",
        },

        {
          id: uuidv4(),
          title: "What is the payment plan to hire developers from Newton",
          content:
            "Payment fees vary according to the talents hired and may be negotiated",
        },

        {
          id: uuidv4(),
          title: "How does Newton workspace work",
          content:
            "With the Newton workspace, you can track the progress of your hired developer on your project. With the real-time clock-in and clock-out, you see your developer working on your project. Also, the Newton workspace provides an avenue to collaborate effectively with your time without the fear of time barriers",
        },

        {
          id: uuidv4(),
          title: "What types of positions do you typically recruit for?",
          content:
            "We currently recruit Backend Engineers, Frontend Engineers, Fullstack Engineers, Mobile Developers, DevOps Engineers, and ML Engineers",
        },

        {
          id: uuidv4(),
          title: "What is your process for sourcing and screening candidates?",
          content:
            "Candidates who are registered on our platform have to take tests based on the skills they outlined they are proficient in, referred to as a Tech Stack Test (TST), a general coding test (GCT), and a job experience test (JET). We ensure that candidates that are matched to a company match the requirements as specified by the company.",
        },
        {
          id: uuidv4(),
          title: "What are your fees for hiring services?",
          content:
            "Fees vary according to the talent hired and may be negotiated.",
        },
        {
          id: uuidv4(),
          title: "How do you ensure the quality of the candidates you present?",
          content:
            "Talents matched with companies are well-rounded. We give standard tests and also monitor the tests with screen recording capabilities. Hence, the tests show the real ability of the talents. The talents are also evaluated based on their professional background, qualification, and experience.",
        },
        {
          id: uuidv4(),
          title:
            "What level of involvement do I need to have in the hiring process?",
          content:
            "We manage everything for you and you can trust our process. But you are welcome to work with us in the selection process in talents according to your unique needs.",
        },

        {
          id: uuidv4(),
          title: "How long does it typically take to fill a position?",
          content: "You can fill in a position within 5 - 10 working days.",
        },

        {
          id: uuidv4(),
          title:
            "How do you ensure that the candidates you present meet our company's needs and requirements?",
          content:
            "Our AI matching system is able to take your company’s needs and match them specifically to your needs.",
        },
        {
          id: uuidv4(),
          title:
            "Can you provide guidance on setting salaries and benefits for new hires?",
          content:
            "Yes, we advise companies on salaries and benefits for hires.",
        },
      ],
    },
    {
      hires: [
        {
          id: uuidv4(),
          title: "What is Newton?",
          content:
            "Newton is U.S based company with an AI-powered platform that links expert software developers to top companies all over the world.",
        },

        {
          id: uuidv4(),
          title: "What kind of jobs does Newton provide?",
          content:
            "We currently recruit Backend Engineers, Frontend engineers, Fullstack engineers, Mobile Developers, DevOps Engineer and ML Engineers.",
        },

        {
          id: uuidv4(),
          title: "How can I join Newton as a developer?",
          content:
            "To kickstart the process to becoming a Newton engineer, sign up here",
          link: "",
        },

        {
          id: uuidv4(),
          title:
            "What are the fees or costs associated with using your hiring service?",
          content: "There are no fees",
        },
        {
          id: uuidv4(),
          title: "How is Newton different from other remote hiring platforms?",
          content:
            "All you need to bring is your expertise. We take care of matching you with great companies for remote jobs and with great pricing. When you sign up with Newton, you do not need to look for any other job.",
        },

        {
          id: uuidv4(),
          title: "How do I set up my profile?",
          content:
            "Sign up and fill in your biodata. Carefully fill in your basic information, Years of experience, Location, Skill sets and so on. Upload your C.V.",
        },

        {
          id: uuidv4(),
          title: "Should I fill in only the skills I am most proficient at??",
          content:
            "Before joining Newton, developers have to go through a rigorous vetting process.  Using an Automated tests and coding challenges, our AI accesses your expertise, links it with your profile and match you with top companies in the world. Our AI Matching platform evaluates the results of the automated MCQ tests and coding challenges to study developers’ skills, proficiency and work experience. Newtons vetting process consists of four steps:",
          list_one: [
            "Biodata and resume upload",
            "Job Experience Test (JET)",
            "Tech Stack Test (TST): You can take as many skill tests as you can. The more tests you take, the stronger your profile will be.",
            "General Coding Test (GCT)",
          ],
          content_two:
            "When you successfully complete these tests, your profile will be finalized and then presented to leading U.S. companies for the most apt remote developer jobs.",
        },

        {
          id: uuidv4(),
          title: "How can I take the biodata and work experience survey?",
          content:
            "Sign up and spend about 10 minutes taking the biodata and work experience survey.",
        },
        {
          id: uuidv4(),
          title: "How do I take the tech stack tests?",
          content:
            "Take as many skill tests as possible. Each skill test is for 60 minutes after which you submit and get your results immediately.",
        },

        {
          id: uuidv4(),
          title: "How can I take the coding challenge?",
          content:
            "Upon completion of the skill test, a live coding challenge on your chosen programming language will be given. You are encouraged to take this test in a quiet place and with a stable internet connection.",
        },

        {
          id: uuidv4(),
          title: "Do I need to pass all tests before selection?",
          content:
            "Yes, you need to pass all tests before selection. However, if you do not pass it in the first attempt, Do not worry. You can take the tests after sometime.",
        },

        {
          id: uuidv4(),
          title: "How do I complete my resume?",
          content:
            "On successful completion of your tests, Newton will give you step-by-step aid to complete your resume.",
        },

        {
          id: uuidv4(),
          title: "What do I need to do to get matched with my resume?",
          content: "Proven expertise, Proactivity and Availability.",
        },

        {
          id: uuidv4(),
          title:
            "Can an engineer with less than 2 years of experience apply to Newton?",
          content:
            "Entry-level roles are for developers with at least 2 years of experience.",
        },

        {
          id: uuidv4(),
          title: "Do I need an engineering degree to join Newton?",
          content:
            "No, you don’t. Your skills are the drivers to getting matched with jobs.",
        },

        {
          id: uuidv4(),
          title: "What qualities does Newton look for while hiring developers?",
          content:
            "Fluency in English language, Proactiveness, Efficiency and Proficiency.",
        },

        {
          id: uuidv4(),
          title: "How do I apply for positions through your company?",
          content:
            "Jobs are advertised on our platform. Also, as soon as you have completed your profile and passed the tests, You will be considered for a job.",
        },

        {
          id: uuidv4(),
          title: "What is it like to work with Newton?",
          content:
            "Working at Turing offers you the opportunity to collaborate with companies all over the world form the comfort of your mind. You connect with the best minds in the industry while getting your job done.",
        },

        {
          id: uuidv4(),
          title: "How many hours do Newton developers work daily?",
          content:
            "Newton developers are to clock in a minimum of 5 hours daily. ",
        },

        {
          id: uuidv4(),
          title: "How do I clock in my hours?",
          content:
            "At the start of each work day, you clock in your hours on the website. At the close of work each day, You are expected to clock out at the end of every business day. ",
        },

        {
          id: uuidv4(),
          title: "When do I receive my payment?",
          content:
            "Payment is remitted based on the work-pay agreement you sign on employment. Payment is deposited into your local bank account in your local currency.",
        },

        {
          id: uuidv4(),
          title: "How does Newton calculate my payment?",
          content: "Payment is calculated on an hourly basis.",
        },
        {
          id: uuidv4(),
          title: "What is the payout and tax process at Newton?",
          content:
            "Newton pays your salary in full without deduction of taxes. ",
        },

        {
          id: uuidv4(),
          title:
            "Do Newton developers need to pay both U.S taxes and their local taxes?",
          content:
            "You do not have to pay U.S. taxes after receiving your salary.",
        },
      ],
    },
  ],
};
