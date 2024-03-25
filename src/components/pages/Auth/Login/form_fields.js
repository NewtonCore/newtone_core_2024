import { v4 as uuidv4 } from "uuid";

export const AUTH_FORM_FIELDS = {
  login: [
    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          type:"text-input",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          type:"text-input",
          value:""
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
          id:  uuidv4(),
          label: "First name",
          input_type: "text",
          name: "first_name",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Last name",
          input_type: "text",
          name: "last_name",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Phone",
          input_type: "text",
          name: "phone",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          value:""
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
          id:  uuidv4(),
          label: "First name",
          input_type: "text",
          name: "first_name",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Last name",
          input_type: "text",
          name: "last_name",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Email",
          input_type: "email",
          name: "email",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Phone",
          input_type: "text",
          name: "phone",
          value:""
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
          input_type: "text",
          name: "company_website",
          value:""
        },
      ],
    },

    {
      id: uuidv4(),
      children_number: 1,
      children: [
        {
          id:  uuidv4(),
          label: "Password",
          input_type: "password",
          name: "password",
          value:""
        },
      ],
    },
  ],
};
