import { v4 as uuidv4 } from "uuid";
import { ENVELOPE_ERROR, ENVELOPE_SUCCESS, ENVELOPE_WARNING } from "./AppSvg";
import time_zones from "./TimeZone";

let isFromBackendData = true;
export const FORM_INPUTS = {
  company_profile_form: [
    {
      id: uuidv4(),
      columns: 1,
      children: [
        {
          id: uuidv4(),
          label: "Company Logo",
          input_type: "text",
          name: "logo",
          type: "image",
          value: "",
        },
      ],
    },
    {
      id: uuidv4(),
      columns: 2,
      children: [
        {
          id: uuidv4(),
          label: "First Name",
          input_type: "text",
          name: "first_name",
          type: "text-input",
          value: "",
          isRequired: true,

          // disabled:true
        },
        {
          id: uuidv4(),
          label: "Last Name",
          input_type: "text",
          type: "text-input",
          value: "",
          name: "last_name",
          isRequired: true,

          // disabled:true
        },
      ],
    },
    {
      id: uuidv4(),
      columns: 2,
      children: [
        {
          id: uuidv4(),
          label: "Company Name",
          input_type: "text",
          name: "name",
          type: "text-input",
          value: "",
          isRequired: true,
        },
        {
          id: uuidv4(),
          label: "Name of Company Personel",
          input_type: "text",
          type: "text-input",
          value: "",
          name: "name_of_company_personel",
          isRequired: true,
        },
      ],
    },
    {
      id: uuidv4(),
      columns: 3,
      children: [
        {
          id: uuidv4(),
          label: "Phone number",
          input_type: "text",
          name: "phone_number",
          type: "text-input",
          value: "",
        },
        {
          id: uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type: "text-input",
          value: "",
          disabled: true,
        },
        {
          id: uuidv4(),
          label: "Website",
          input_type: "url",
          name: "company_website",
          type: "text-input",
          value: "",
        },
      ],
    },

    {
      id: uuidv4(),
      columns: 1,
      children: [
        {
          id: uuidv4(),
          label: "About company",
          input_type: "text-area",
          name: "about",
          type: "text-area-tiny",
          value: "",
        },
      ],
    },
    {
      id: uuidv4(),
      columns: 2,
      children: [
        {
          id: uuidv4(),
          label: "Country",
          input_type: "text",
          name: "country",
          value: "",
          type: "r-select",
          isRequired: true,
        },
        {
          id: uuidv4(),
          label: "Company Address",
          input_type: "text",
          name: "address",
          type: "text-input",
          value: "",
        },
      ],
    },
  ],
  company_schedule_interview_form: [
    {
      id: uuidv4(),
      children: [
        {
          id: uuidv4(),
          label: "Date",
          // input_type: "date",
          name: "date",
          // type: "text-input",
          input_type: "mui-date",
          // name: "expiration_date",
          type: "mui-date",
          bs_size: 3,
          value: "",
          isRequired: true,
          hasDateError: false,
        },
      ],
    },
    {
      id: uuidv4(),
      colums: 2,
      children: [
        {
          id: uuidv4(),
          label: "Time",
          input_type: "time",
          name: "start_time",
          type: "text-input",
          value: "",
        },
        {
          id: uuidv4(),
          label: "Time-Zone",
          input_type: "text",
          name: "time_zone",
          type: "select",
          value: "",
          data: time_zones,
          isRequired: true,
        },
      ],
    },
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Time Duration (Minutes)",
          input_type: "number",
          name: "time_duration",
          type: "text-input",
          value: "",
        },
      ],
    },
    // {
    //   id: uuidv4(),
    //   colums: 1,
    //   children: [
    //     {
    //       id: uuidv4(),
    //       label: "Meeting Link",
    //       input_type: "text",
    //       name: "meeting_link",
    //       type: "text-input",
    //       value: "",
    //     },
    //   ],
    // },
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Message",
          input_type: "text",
          name: "message",
          type: "text-area",
          value: "",
          // disabled: false,
        },
      ],
    },
  ],
  talent_apply_job: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Message",
          input_type: "text",
          name: "message",
          type: "text-area",
          value: "",
          // disabled: false,
        },
      ],
    },
  ],

  talent_report_test: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Report Test Question",
          input_type: "text",
          name: "message",
          type: "text-area",
          value: "",
          placeholder: "Enter your message for reporting this question",
          // disabled: false,
        },
      ],
    },
  ],

  company_offer_job: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Message",
          input_type: "text",
          name: "message",
          type: "text-area",
          value: "",
          rows: 20,
          // disabled: false,
        },
      ],
    },
  ],
  company_reject_application: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Message",
          input_type: "text",
          name: "message",
          type: "text-area",
          value: "",
          rows: 20,
          // disabled: false,
        },
      ],
    },
  ],
  company_post_job: [
    {
      id: uuidv4(),
      colums: 3,
      children: [
        {
          id: uuidv4(),
          label: "Job Title",
          input_type: "text",
          name: "title",
          type: "r-select-2",
          value: "",
          data: [],
          isFromBackendData,
          isRequired: true,
        },
        {
          id: uuidv4(),
          label: "Job Type",
          input_type: "text",
          name: "type",
          type: "select",
          value: "",
          data: ["contract", "permanent"],
          isRequired: true,
        },
        {
          id: uuidv4(),
          label: "Period in months",
          input_type: "number",
          name: "duration",
          type: "text-input",
          value: "",
          min: 1,
          hidden: true,
          isRequired: false,
          placeholder: "e.g 5",
        },
      ],
    },

    // {
    //   id: uuidv4(),
    //   colums: 1,
    //   children: [
    //     {
    //       id: uuidv4(),
    //       label: "You can attach job description",
    //       input_type: "text",
    //       name: "file_description",
    //       type: "file",
    //       value: "",
    //       // isRequired: true,
    //     },
    //   ],
    // },

    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Job Description",
          input_type: "text",
          name: "description",
          type: "text-area-tiny",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      colums: 2,
      children: [
        {
          id: uuidv4(),
          label: "Years of Experience",
          input_type: "number",
          name: "experience",
          type: "text-input",
          value: "1",
          min: 1,
          isRequired: true,
        },

        {
          id: uuidv4(),
          label: "Qualification",
          input_type: "text",
          name: "qualification",
          type: "select",
          data: ["bachelor's degree", "diploma", "certificate", "postgraduate"],
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      colums: 3,
      desc: "Monthly Salary. (Newton is to be paid 25% of the salary of each talent)",
      children: [
        {
          id: uuidv4(),
          label: "Currency e.g USD",
          input_type: "text",
          name: "currency",
          type: "r-select",
          data: ["USD"],
          value: "",
          isRequired: true,
        },
        {
          id: uuidv4(),
          label: "Minimum Salary Range",
          input_type: "number",
          name: "min_salary",
          type: "text-input",
          value: "",
          placeholder: "e.g 1000",
          isRequired: true,
          min: 0,
        },

        {
          id: uuidv4(),
          label: "Maximum Salary Range",
          input_type: "number",
          name: "max_salary",
          type: "text-input",
          value: "",
          placeholder: "e.g 2000",
          isRequired: true,
          min: 1,
        },
      ],
    },

    {
      id: uuidv4(),
      colums: 2,
      desc: "Location of the job",
      children: [
        {
          id: uuidv4(),
          label: "Job Location",
          input_type: "text",
          name: "job_location",
          type: "select",
          data: ["remote", "on site"],
          value: "",
          isRequired: true,
        },

        {
          id: uuidv4(),
          label: "On site",
          input_type: "text",
          name: "on_site",
          type: "select",
          value: null,
          hidden: true,
        },

        {
          id: uuidv4(),
          label: "If on site, enter location",
          input_type: "text",
          name: "location",
          type: "text-input",
          value: "",
          hidden: true,
          isRequired: false,
        },
      ],
    },

    {
      id: uuidv4(),
      colums: 1,
      desc: "Would your company give work authorization to candidates not in your zone?",
      hidden: true,
      name: "give_work_authorization",
      children: [
        {
          id: uuidv4(),
          label: "Yes",
          input_type: "radioInput",
          name: "give_work_authorization",
          type: "radioInput",
          value: null,
          hidden: true,
          options: [
            {
              id: uuidv4(),
              icon: ENVELOPE_SUCCESS,
              name: "give_work_authorization",
              label: "Yes",
              value: true,
              labelFooter:
                "My company will give work authorization to candidates not in my zone",
            },
            {
              id: uuidv4(),
              icon: ENVELOPE_ERROR,
              name: "give_work_authorization",
              label: "No",
              value: false,
              labelFooter:
                "My company will NOT give work authorization to candidates not in my zone",
            },
          ],
        },
        // {
        //   id: uuidv4(),
        //   label: "No",
        //   input_type: "radio",
        //   name: "give_work_authorization",
        //   type: "radioDiv",
        //   value: false,
        //   hidden: true,
        //   icon: ENVELOPE_ERROR,
        //   labelFooter:
        //     "My company will not give work authorization to candidates not in my zone",
        // },
      ],
    },

    {
      id: uuidv4(),
      colums: 2,
      children: [
        // {
        //   id: uuidv4(),
        //   label: "Expected Application Closing Date",
        //   input_type: "text",
        //   name: "expiration_date",
        //   type: "year-month-date",
        //   bs_size: 3,
        //   value: "2022-12-12",
        //   isRequired: true,
        //   hasDateError: false,
        // },

        // {
        //   id: uuidv4(),
        //   label: "Expected Job Start Date",
        //   input_type: "text",
        //   name: "start_date",
        //   type: "year-month-date",
        //   bs_size: 3,
        //   value: "",
        //   isRequired: true,
        //   hasDateError: false,
        // },

        {
          id: uuidv4(),
          label: "Expected Application Closing Date",
          input_type: "mui-date",
          name: "expiration_date",
          type: "mui-date",
          bs_size: 3,
          value: "",
          isRequired: true,
          hasDateError: false,
        },

        {
          id: uuidv4(),
          label: "Expected Job Start Date",
          input_type: "mui-date",
          name: "start_date",
          type: "mui-date",
          bs_size: 3,
          value: "",
          isRequired: true,
          hasDateError: false,
        },
      ],
    },
  ],

  referalForm: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Referral Link",
          input_type: "text",
          name: "referal_link",
          type: "text-input",
          value: "",
          disabled: true,
        },
      ],
    },
  ],
  availability_form: [
    {
      id: uuidv4(),
      label: "Looking for a tech role?",
      size: 12,
      children: [
        {
          id: uuidv4(),
          // label: "Available for Interview",
          // value: "Available for Interview",
          icon: ENVELOPE_SUCCESS,
          input_type: "buttonSelectOptions",
          name: "searching_for_job",
          value: null,
          hidden: true,
          type: "buttonSelectOptions",
          size: 6,

          options: [
            {
              id: uuidv4(),
              label: "Open for Interviews",
              value: "Open for Interviews",
              icon: ENVELOPE_SUCCESS,
              type: "buttonSelect",
              input_type: "buttonSelect",
              name: "give_work_authorization",
              labelFooter:
                "I am actively looking for a tech role. I am available for interviews for the next 30 days.",
            },
            // {
            //   id: uuidv4(),
            //   type: "buttonSelect",
            //   input_type: "buttonSelect",
            //   label: "Ready to take Offers",
            //   value: "Ready to take Offers",
            //   name: "give_work_authorization",
            //   icon: ENVELOPE_WARNING,
            //   labelFooter:
            //     "I am not actively looking for a new remote software job, but I am available to hear about new job opportunities for the next 30 days",
            // },
            {
              id: uuidv4(),
              type: "buttonSelect",
              input_type: "buttonSelect",
              label: "Not currently available",
              value: "Not currently available",
              name: "give_work_authorization",
              icon: ENVELOPE_ERROR,
              labelFooter: "I am not looking for a tech role at the moment.",
            },
          ],
        },
        // {
        //   id: uuidv4(),
        //   input_type: "radioDiv",
        //   label: "Ready to take Offers",
        //   value: "Ready to take Offers",

        //   icon: ENVELOPE_WARNING,
        //   labelFooter:
        //     "I am not actively looking for a new remote software job, but I am available to hear about new job opportunities for the next 30 days",
        // },
        // {
        //   id: uuidv4(),
        //   input_type: "radioDiv",
        //   label: "Not available now",
        //   value: "Not available now",

        //   icon: ENVELOPE_ERROR,
        //   labelFooter:
        //     "I am not looking for a new remote software job at the moment",
        // },
      ],
    },
    {
      id: uuidv4(),
      label: "Are you interested in remote or onsite roles?",
      children: [
        {
          id: uuidv4(),
          input_type: "radio",
          label: "Are you interested in remote or onsite roles?",
          value: null,
          name: "interested_at_fulltime_job",
          type: "radio",
          hidden: true,
          options: [
            {
              id: uuidv4(),
              input_type: "radio",
              label: "Remote only",
              value: "Remote only",
              name: "searching_for_job",
            },
            {
              id: uuidv4(),
              input_type: "radio",
              label: "On-site only",
              value: "On-site only",
              name: "searching_for_job",
            },
            {
              id: uuidv4(),
              input_type: "radio",
              label: "Any one will do",
              value: "Any one will do",
              name: "searching_for_job",
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      label:
        "After getting an offer, how soon can you start full-time with Newton?",
      children: [
        {
          id: uuidv4(),
          input_type: "radio",
          label:
            "After getting an offer, how soon can you start full-time with Newton?",
          value: null,
          name: "when_for_starting",
          type: "radio",
          hidden: true,
          options: [
            {
              id: uuidv4(),
              input_type: "radio",
              label: "Immediately",
              value: "Immediately",
              name: "when_for_starting",
            },
            {
              id: uuidv4(),
              input_type: "radio",
              label: "After one week",
              value: "After one week",
              name: "when_for_starting",
            },
            {
              id: uuidv4(),
              input_type: "radio",
              label: "After one month",
              value: "After one month",
              name: "when_for_starting",
            },
          ],
        },
      ],
    },

    {
      id: uuidv4(),
      label:
        "Would you want to work for a company in your current city of residence?",
      children: [
        {
          id: uuidv4(),
          input_type: "radio",
          label:
            "Would you want to work for a company in your current city of residence?",
          value: null,
          name: "work_for_company_in_residence",
          type: "radio",
          hidden: true,
          options: [
            {
              id: uuidv4(),
              input_type: "radio",
              label: "Yes",
              value: "Yes",
              name: "work_for_company_in_residence",
            },
            {
              id: uuidv4(),
              input_type: "radio",
              label: "No",
              value: "No",
              name: "work_for_company_in_residence",
            },
          ],
        },
      ],
    },
  ],
  login: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type: "text-input",
          value: "",
          isRequired: true,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
          title: "Invalid email address",
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
  ],

  forgot_password: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type: "text-input",
          value: "",
          isRequired: true,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
          title: "Invalid email address",
          placeholder: "ex: janedoe@newtoncore.com",
        },
      ],
    },
  ],

  password_reset: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type: "text-input",
          value: "",
          isRequired: true,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
          title: "Invalid email address",
          placeholder: "ex: janedoe@newtoncore.com",
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Confirm Password",
          input_type: "password",
          name: "confirmPassword",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
  ],

  forgot_password_code: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Enter Code",
          input_type: "text",
          name: "code",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
  ],

  change_password: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Confirm Password",
          input_type: "password",
          name: "confirm_password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
  ],

  find_job_skill_search: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Search by skill",
          input_type: "text",
          name: "skill",
          type: "r-select",
          value: "",
          data: ["python"],
          isFromBackendData: true,
          isRequired: true,
        },
      ],
    },
  ],

  signupTalent: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "First name",
          input_type: "text",
          name: "first_name",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Last name",
          input_type: "text",
          name: "last_name",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type: "text-input",
          value: "",
          isRequired: true,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
          title: "Invalid email address",
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Phone",
          input_type: "text",
          name: "phone",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          type: "text-input",
          value: "",
          isRequired: true,
          // pattern:
          //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
          // title:
          //   "Password should have at least 1 Uppercase, 1 Lowercase, 1 Number, At least 1 Symbol, symbol allowed, Min 8 chars and Max 12 chars",
        },
      ],
    },
  ],

  signupCompany: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "First name",
          input_type: "text",
          name: "first_name",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Last name",
          input_type: "text",
          name: "last_name",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type: "text-input",
          value: "",
          isRequired: true,
          pattern:
            "^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$",
          title:
            "Email address is not for company. Avoid Gmail, yahoo, hotmail and etc.",
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Phone",
          input_type: "text",
          name: "phone",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Company Website",
          input_type: "url",
          name: "company_website",
          type: "text-input",
          value: "",
          isRequired: true,
          pattern:
            "/((([A-Za-z]{3,9}:(?://)?)(?:[-;:&=+$,w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=+$,w]+@)[A-Za-z0-9.-]+)((?:/[+~%/.w-_]*)???(?:[-+=&;%@.w_]*)#?(?:[w]*))?)/",
          title: "URL should be a valid one",
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id: uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
  ],

  TALENT_CHANGE_PASS_FIELDS2: [
    {
      label: "Old Password",
    },
    {
      label: "New Password",
    },
    {
      label: "Confirm New Password",
    },
  ],

  TALENT_CHANGE_PASS_FIELDS: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Old Password",
          input_type: "password",
          name: "old_password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },

    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "New Password",
          input_type: "password",
          name: "password",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Confirm New Password",
          input_type: "password",
          name: "confirmPassword",
          type: "text-input",
          value: "",
          isRequired: true,
        },
      ],
    },
  ],

  DELETE_PROFILE_FIELDS: [
    {
      label: "Please enter your login Password to confirm:",
    },
  ],

  COMPANY_PROFILE: {
    biodata: [
      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Company Name",
            input_type: "text",
            name: "full_name",
            type: "text-input",
          },
          {
            id: uuidv4(),
            label: "Name of Company Personell",
            input_type: "text",
            name: "company_personel",
            type: "text-input",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 2,
        children: [
          // {
          //   id: uuidv4(),
          //   label: "Phone number (Start with your country code ex +123)",
          //   input_type: "text",
          //   name: "Phone number",
          //   type: "text-input",
          // },
          {
            id: uuidv4(),
            label: "Email",
            input_type: "text",
            name: "email",
            type: "text-input",
          },
          {
            id: uuidv4(),
            label: "Website",
            input_type: "url",
            name: "website",
            type: "text-input",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            label: "About",
            input_type: "text",
            name: "about",
            type: "text-area-tiny",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Location",
            input_type: "text",
            name: "location",
            type: "text-input",
          },
          {
            id: uuidv4(),
            label: "Company Address",
            input_type: "text",
            name: "company_address",
            type: "text-input",
          },
        ],
      },
    ],
  },
  EDIT_PROFILE: {
    biodata: [
      {
        id: uuidv4(),
        columns: 1,
        children: [
          {
            id: uuidv4(),
            label: "User Image",
            input_type: "text",
            name: "photo",
            type: "image",
            value: "",
          },
        ],
      },
      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "First name",
            input_type: "text",
            name: "first_name",
            type: "text-input",
            value: "",
            isRequired: true,
          },
          {
            id: uuidv4(),
            label: "Last name",
            input_type: "text",
            name: "last_name",
            type: "text-input",
            value: "",
            isRequired: true,
          },
          // {
          //   id: uuidv4(),
          //   label: "Email",
          //   input_type: "email",
          //   name: "email",
          //   type: "text-input",
          //   value: "",
          //   isRequired: true,
          //   disabled: true,
          // },
        ],
      },
      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            label: "Email",
            input_type: "email",
            name: "email",
            type: "text-input",
            value: "",
            isRequired: true,
            disabled: true,
          },
          {
            id: uuidv4(),
            label: "Gender",
            input_type: "text",
            name: "gender",
            type: "select",
            data: ["male", "female", "other"],
            value: "",
          },

          {
            id: uuidv4(),
            label: "Country",
            input_type: "text",
            name: "country",
            type: "r-select",
            data: [],
            value: "",
            isRequired: true,
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Phone number (Start with your country code ex +123)",
            input_type: "text",
            name: "phone",
            type: "text-input",
            value: "",
            isRequired: true,
          },
          {
            id: uuidv4(),
            label: "Address",
            input_type: "text",
            name: "address",
            type: "text-input",
            value: "",
            isRequired: true,
            placeholder: "e.g Alabama",
          },
        ],
      },
      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            label: "Profession",
            input_type: "text",
            name: "current_job_title",
            type: "text-input",
            value: "",
            isRequired: true,
            placeholder: "e.g Software Developer",
          },
          {
            id: uuidv4(),
            label: "Years of Experience",
            input_type: "number",
            name: "year_of_experience",
            type: "text-input",
            value: "1",
            min: 1,
            isRequired: true,
          },

          {
            id: uuidv4(),
            label: "Highest Qualification",
            input_type: "text",
            name: "qualification",
            type: "select",
            data: [
              "bachelor's degree",
              "diploma",
              "certificate",
              "postgraduate",
            ],
            value: "",
            isRequired: true,
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Github account",
            input_type: "text",
            name: "github",
            type: "text-input",
            value: "",
          },
          {
            id: uuidv4(),
            label: "LinkedIn account",
            input_type: "text",
            name: "linkedlin",
            type: "text-input",
            value: "",
          },
        ],
      },

      // {
      //   id: uuidv4(),
      //   colums: 3,
      //   children: [

      //   ],
      // },

      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            label: "Expected minimum salary",
            input_type: "number",
            name: "expected_min_salary",
            type: "text-input",
            value: "0",
            min: 1,
          },

          {
            id: uuidv4(),
            label: "Desired Job Type",
            input_type: "text",
            name: "type",
            type: "select",
            data: ["contract", "permanent"],
            value: "",
            isRequired: true,
          },
          // {
          //   id: uuidv4(),
          //   label: "Desired Job Mode",
          //   input_type: "text",
          //   name: "desiredJobMode",
          //   type: "select",
          //   data: ["full-time", "part-time"],
          //   value: "",
          //   isRequired: true,
          // },

          {
            id: uuidv4(),
            label: "Duration in Months",
            input_type: "number",
            name: "period",
            type: "text-input",
            value: "",
            min: 1,
            hidden: true,
            isRequired: false,
          },
        ],
      },
      {
        id: uuidv4(),
        colums: 1,
        children: [
          {
            id: uuidv4(),
            label: "About me",
            input_type: "text",
            name: "about_me",
            type: "text-area-tiny",
            value: "",
            isRequired: true,
          },
        ],
      },
    ],

    education: [
      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Institution attended",
            input_type: "text",
            name: "school",
            type: "uni-select",
            value: "",
            isRequired: true,
            placeholder: "e.g Havard",
            data: [],
            isFromBackendData: true,
          },
          {
            id: uuidv4(),
            label: "Certification obtained",
            input_type: "text",
            name: "degree",
            type: "text-input",
            value: "",
            isRequired: true,
            placeholder: "Bsc. Information Technology",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 3,
        children: [
          // start_month = models.IntegerField()
          // start_year = models.IntegerField()
          // end_month = models.IntegerField(null=True)
          // end_year = models.IntegerField(null=True)
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "start_year",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "start_month",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "end_year",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "end_month",
          },
          {
            id: uuidv4(),
            input_type: "checkbox",
            type: "checkbox",

            label: "I am currently here",
            value: false,
            name: "currently_here",
            parent_name: "month",
          },
          {
            id: uuidv4(),
            label: "Start date",
            input_type: "text",
            name: "start_date",
            type: "year-month",
            bs_size: 3,
            value: "",
            isRequired: true,
            hasDateError: false,
          },
          {
            id: uuidv4(),
            label: "End date",
            input_type: "date",
            name: "end_date",
            type: "year-month",
            bs_size: 3,
            value: "",
            // has_child: true,
            // siblling: "currently_here",
            hasDateError: false,
          },

          {
            id: uuidv4(),
            label: "City or Location",
            input_type: "text",
            name: "location",
            type: "text-input",
            bs_size: 6,
            value: "",
            placeholder: "Ex. London",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 1,
        children: [
          {
            id: uuidv4(),
            label: "Description",
            input_type: "text",
            // name: "about",
            name: "description",
            type: "text-area-tiny",
            value: "",
          },
        ],
      },
    ],

    work: [
      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Company",
            input_type: "text",
            name: "company_name",
            type: "text-input",
            value: "",
            isRequired: true,
            placeholder: "Ex. Newton",
          },
          {
            id: uuidv4(),
            label: "Position",
            input_type: "text",
            name: "project_role",
            type: "text-input",
            value: "",
            isRequired: true,
            placeholder: "Ex. Software Developer",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "start_year",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "start_month",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "end_year",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "end_month",
          },
          {
            id: uuidv4(),
            label: "I am currently here",
            input_type: "checkbox",
            type: "checkbox",
            value: false,
            name: "still_working",
            parent_name: "end_date",
          },
          {
            id: uuidv4(),
            label: "Start date",
            input_type: "text",
            name: "start_date",
            type: "year-month",
            bs_size: 3,
            value: "",
            hasDateError: false,
            isRequired: true,
          },
          {
            id: uuidv4(),
            label: "End date",
            input_type: "date",
            name: "end_date",
            type: "year-month",
            bs_size: 3,
            value: "",
            hasDateError: false,
          },

          {
            id: uuidv4(),
            label: "City or Location",
            input_type: "text",
            name: "city",
            type: "text-input",
            bs_size: 6,
            value: "",
            placeholder: "Ex. London",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 1,
        children: [
          {
            id: uuidv4(),
            label: "Description",
            input_type: "text",
            name: "description",
            value: "",
            type: "text-area-tiny",
          },
        ],
      },
    ],

    skill: [
      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            label: "Skill",
            input_type: "text",
            name: "skill",
            type: "r-select-2",
            value: "",
            data: ["python"],
            isFromBackendData: true,
            isRequired: true,
          },
          {
            id: uuidv4(),
            label: "Experience level",
            input_type: "text",
            name: "level",
            type: "select",
            data: ["beginner", "intermediate", "senior", "advanced"],
            value: "",
            isRequired: true,
          },

          {
            id: uuidv4(),
            label: "Years of experience",
            input_type: "number",
            name: "yearExperience",
            type: "text-input",
            value: "1",
            min: 1,
            isRequired: true,
          },
        ],
      },
    ],
    links: [
      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Personal Website",
            input_type: "url",
            name: "website",
            type: "text-input",
            value: "",
          },
          {
            id: uuidv4(),
            label: "Portfolio",
            input_type: "text",
            name: "portfolio",
            type: "text-input",
            value: "",
          },
        ],
      },
    ],
    projects: [
      {
        id: uuidv4(),
        colums: 2,
        children: [
          {
            id: uuidv4(),
            label: "Project title",
            input_type: "text",
            name: "title",
            type: "text-input",
            value: "",
            isRequired: true,
          },
          {
            id: uuidv4(),
            label: "Your role in the Project",
            input_type: "text",
            name: "project_role",
            type: "text-input",
            value: "",
            isRequired: true,
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 1,
        children: [
          {
            id: uuidv4(),
            label: "Tech stack used",
            input_type: "text",
            name: "skills",
            type: "r-select",
            value: [],
            isMulti: true,
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 3,
        children: [
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "start_year",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "start_month",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "end_year",
          },
          {
            id: uuidv4(),
            hidden: true,
            value: "",
            name: "end_month",
          },
          {
            id: uuidv4(),
            label: "Project is still ongoing",
            input_type: "checkbox",
            type: "checkbox",
            value: false,
            name: "currently_here",
            parent_name: "month",
          },
          {
            id: uuidv4(),
            label: "Start date",
            input_type: "text",
            name: "start_date",
            type: "year-month",
            bs_size: 3,
            value: "",
            isRequired: true,
            hasDateError: false,
          },

          {
            id: uuidv4(),
            label: "End date",
            input_type: "date",
            name: "end_date",
            type: "year-month",
            bs_size: 3,
            value: "",
            hasDateError: false,
          },

          {
            id: uuidv4(),
            label: "Completed Projects URL",
            input_type: "url",
            name: "url",
            type: "text-input",
            bs_size: 6,
            value: "",
            placeholder: "http://",
          },
        ],
      },

      {
        id: uuidv4(),
        colums: 1,
        children: [
          {
            id: uuidv4(),
            label: "Project Description",
            input_type: "text",
            name: "description",
            type: "text-area-tiny",
            value: "",
          },
        ],
      },
    ],
    company_debit_information: [
      {
        id: uuidv4(),
        colums: 4,
        children: [
          {
            id: uuidv4(),
            label: "Card Number",
            input_type: "text",
            name: "cardNum",
            type: "text-input",
            value: "",
          },
          {
            id: uuidv4(),
            label: "Name on card",
            input_type: "text",
            name: "name_on_card",
            type: "text-input",
            value: "",
          },
          {
            id: uuidv4(),
            label: "Expiry",
            input_type: "text",
            name: "expiryCode",
            type: "text-input",
            value: "",
          },
          {
            id: uuidv4(),
            label: "CVV",
            input_type: "text",
            name: "CVV",
            type: "text-input",
            value: "",
          },
        ],
      },
    ],
  },
  job_ordering_form: [
    {
      id: uuidv4(),
      colums: 3,
      children: [
        {
          id: uuidv4(),
          label: "Order by",
          input_type: "text",
          name: "ordering",
          type: "r-select",
          value: "",
          data: [
            {
              id: "-title",
              name: "Title",
            },
            {
              id: "-created_at",
              name: "Created at",
            },
            {
              id: "-experience",
              name: "Experience",
            },
            {
              id: "-status",
              name: "State",
            },
          ],
        },
      ],
    },
  ],
  talent_search_skill: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Search",
          input_type: "text",
          name: "search",
          type: "text-input",
          value: "",
          placeholder: "Search",
          // disabled: false,
        },
      ],
    },
  ],

  talent_manual_university: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Enter name of university",
          input_type: "text",
          name: "search",
          type: "text-input",
          value: "",
          placeholder: "Name of university",
          // disabled: false,
        },
      ],
    },
  ],

  talent_search_university: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Search",
          input_type: "text",
          name: "search",
          type: "text-input",
          value: "",
          placeholder: "Search",
          // disabled: false,
        },
      ],
    },
  ],

  staff_upload_test_gorilla: [
    {
      id: uuidv4(),
      colums: 1,
      children: [
        {
          id: uuidv4(),
          label: "Attach file (.xlsx)",
          input_type: "text",
          name: "gorilla_results",
          type: "file",
          value: "",
          // isRequired: true,
        },
      ],
    },
  ],

  staff_add_question: [
    {
      id: uuidv4(),
      colums: 2,
      children: [
        {
          id: uuidv4(),
          label: "Skill",
          input_type: "text",
          name: "skill_id",
          type: "r-select-2",
          value: "",
          data: ["python"],
          isFromBackendData: true,
          isRequired: true,
        },
        
      ],
    },

    {
      id: uuidv4(),
      colums: 1,
      children: [
       
        {
          id: uuidv4(),
          label: "Attach file (Select .txt file)",
          input_type: "text",
          name: "file",
          type: "file",
          value: "",
        },
      ],
    },
  ],

  staff_talent_list: [
    {
      id: uuidv4(),
      colums: 2,
      children: [
        {
          id: uuidv4(),
          label: "Select Talent",
          input_type: "text",
          name: "talent",
          type: "r-select",
          value: "",
          data: ["talent_1"],
          isFromBackendData: true,
          isRequired: true,
        },
        
      ],
    },

   
  ],

  staff_skill_list: [
    {
      id: uuidv4(),
      colums: 2,
      children: [
        {
          id: uuidv4(),
          label: "Select Skill",
          input_type: "text",
          name: "skill_id",
          type: "r-select",
          value: "",
          data: ["skill_1"],
          isFromBackendData: true,
          isRequired: true,
        },
        
      ],
    },

   
  ],
};
