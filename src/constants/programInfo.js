import logo from "../images/secureset_logo.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"
export const showPopup = false

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "9.49%",
  interestRate60: "11.46%",
  APRRange36: "11.93 - 12.87%",
  APRRange60: "13.25 - 13.62%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.08%",
      financeCharge36: "$2,371.56",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      IOPayment60: "$XX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "X", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "11.69%",
      financeCharge36: "$1,904.08",
      FullMonthlyPayment36: "$330.67",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const interestRateCards = {
  // 3 month program, 3 months grace for term details section
  APR36: "8.87 - 17.21%",
  APR60: "9.90 - 17.24%",
  immediateRepayment: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "9.82% - 17.21%",
    // APR60: "10.34% - 17.24%",
  },
  interestOnly: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "8.87 - 16.29%",
    // APR60: "9.96 - 16.87%",
  },
  deferred: {
    int36: "7.00 - 14.25%",
    int60: "8.75 - 15.50%",
    // APR36: "9.24 - 16.43%",
    // APR60: "9.90 - 16.68%",
  },
}

export const previewText = {
  headline: "Simple. Flexible.",
  subheadline:
    "We offer loans tailored to your needs. Preview your options and select the right financing solution for you.",
  // headline: "Simple. Clear.",
  // subheadline:
  //   "We offer a straightforward loan so you can focus on your program and transform your future.",
  cards: [
    {
      heading: "Deferred Repayment",
      body: "Make no payments while you study and for three months after.",
    },
    {
      heading: "Interest Only",
      body:
        "Make low interest-only payments while you study and for three months after completing your program.",
    },
    {
      heading: "Immediate Repayment",
      body: "Start paying your loan back one month after your program begins.",
    },
    // {
    //   heading: "36-Month Loan",
    //   // body:
    //   //   "Pay off your loan faster. Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    //   body:
    //     "Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    // },
    // {
    //   heading: "60-Month Loan",
    //   body:
    //     "Make smaller monthly payments. Start paying your loan back one month after your program begins, and make 60 monthly payments until your loan is repaid.",
    // },
  ],
}

export const faq = {
  // faq section
  costOfLiving: true, // true if at least one program has cost of living included
  costOfLivingPrograms: "CORE and HUNT programs", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: false, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: true, // true if at least one program is remote/online
  schoolHQState: "NY",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "9.49%",
  interestRate60: "11.46%",
  APR36: "11.93 - 12.11%",
  APR60: "13.25 - 13.32%",
  IOPayment36: "$83.04",
  IOPayment60: "$100.28",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "CORE Program",
      maxAmount: "$19,450",
      col: true,
      colAmount: "$7,500",
    },
    {
      programName: "HUNT Program",
      maxAmount: "$11,450",
      col: true,
      colAmount: "$7,500",
    },
    {
      programName: "PATH Program",
      maxAmount: "$15,450",
      col: false,
      colAmount: "$10,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "SecureSet"

export const schoolURL = "https://secureset.com/" // update with url of school's website

export const skfURL = "https://secureset.skills.fund/" // update with Skills Fund url

export const headline = "Fund Your Future At SecureSet" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to cover multiple stacks of programming languages to help graduates develop a diverse skill-set. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Onsite Bootcamp, Online Full-Time Bootcamp, and Online Part-Time Bootcamp programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "secureset_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "84a22c21-7ecc-401e-a742-2bc6b7c068ad" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_secureset_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 9.49,
  ir60: 11.46,
}
export const moreThanSixPrograms = true // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "CORE Program",
    url: "https://my.skills.fund/application?lenderCode=SASSCORE17",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 30000,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 8,
        apr36: 11.93,
        apr60: 13.25,
      },
      "Immediate Repayment": {
        apr36: 12.36,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 30000,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 8,
            apr36: 11.93,
            apr60: 13.25,
          },
          "Immediate Repayment": {
            apr36: 12.36,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "HUNT Program",
    url: "https://my.skills.fund/application?lenderCode=SASSHUNT17",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 18000,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 12.11,
        apr60: 13.32,
      },
      "Immediate Repayment": {
        apr36: 12.36,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 18000,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 12.11,
            apr60: 13.32,
          },
          "Immediate Repayment": {
            apr36: 12.36,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "PATH Program",
    url: "https://my.skills.fund/application?lenderCode=SASSCOEV17",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 16000,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 8,
        apr36: 11.93,
        apr60: 13.25,
      },
      "Immediate Repayment": {
        apr36: 12.87,
        apr60: 13.62,
      },
    },
    defaultLoanType: "Immediate Repayment", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 16000,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 8,
            apr36: 11.93,
            apr60: 13.25,
          },
          "Immediate Repayment": {
            apr36: 12.87,
            apr60: 13.62,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to your metro's max (see table below) for the PROGRAM 1, up to $14,995 for the PROGRAM 2 Bootcamp tuition, and up to $9,995 for the PROGRAM 3 Bootcamp tuition."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
