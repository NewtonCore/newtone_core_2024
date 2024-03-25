export const COMPANY_PROFILE_FIELDS = [
  {
    id: 1,
    columns: 2,
    children: [
      {
        id: 1,
        label: "Company Name",
        input_type: "text",
        name: "name",
        type: "text-input",
        value: "",
      },
      {
        id: 2,
        label: "Name of Company Personel",
        input_type: "text",
        type: "text-input",
        value: "",
        name: "name_of_company_personel",
      },
    ],
  },
  {
    id: 2,
    columns: 3,
    children: [
      {
        id: 1,
        label: "Phone number",
        input_type: "text",
        name: "phone_number",
        type: "text-input",
        value: "",
      },
      {
        id: 2,
        label: "Email",
        input_type: "email",
        name: "email",
        type: "text-input",
        value: "",
      },
      {
        id: 3,
        label: "Website",
        input_type: "url",
        name: "website",
        type: "text-input",
        value: "",
      },
    ],
  },

  {
    id: 3,
    columns: 1,
    children: [
      {
        id: 1,
        label: "About company",
        input_type: "text-area",
        name: "about",
        type: "text-area",
        value: "",
      },
    ],
  },
  {
    id: 4,
    columns: 2,
    children: [
      {
        id: 1,
        label: "Location",
        input_type: "text",
        name: "country",
        type: "text-input",
        value: "",
      },
      {
        id: 2,
        label: "Company Address",
        input_type: "text",
        name: " address",
        type: "text-input",
        value: "",
      },
    ],
  },
]
