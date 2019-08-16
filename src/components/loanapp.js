import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import marching from '../images/PeopleMarchColor.png'

const LoanApp = React.forwardRef((props, ref) => {

    const [email, setEmail] = useState('')
    const [IP, setIP] = useState('')
    const [disclaimers, toggleDisclaimers] = useState(false)
    const [programInfo, setProgramInfo] = useState({
        programName: 'PROGRAM NAME',
        active: { 
            program1: false,
            program2: false,
            program3: false
        }
    })
    const [loanUrl, setLoanUrl] = useState(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=INSERT_MARKET_SEGMENT_CODE`) // if multiple programs, set lenderCode to first program option
    const formID = 'HUBSPOT_FORM_ID' // get form id for apply now
    const schoolName = 'SCHOOL NAME'
    const pageUri = 'SCHOOLNAME.skills.fund' // partner page uri
    const costOfLiving = true // set to false of cost of living is not available
    const multiplePrograms = true // set to false if there is only one program
    const onlinePrograms = false // set to true if there is at least one online/remote program offered
    const schoolHQState = 'NY' // two letter abbreviation for school headquarters state

    const activeClass = "cursor-pointer border-2 rounded border-black text-center py-2 text-white bg-primary" // highlights selected option in loan app form
    const inactiveClass = "cursor-pointer border-2 rounded border-black text-center py-2"


    const handleChange = e => {
        setEmail(e.target.value)
    }

    // update segment code and programName (must match internal value on Hubspot form)
    const handleProgramSelect = programNumber => {
        switch(programNumber) {
            case 1: // info should match default
                setProgramInfo({
                    programName: 'HS_INTERNAL_VALUE_PROGRAM_1', 
                    active: {
                        program1: !programInfo.active.program1, 
                        program2: false, 
                        program3: false
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=INSERT_MARKET_SEGMENT_CODE`) // update lenderCode with market segment code from LP
                break;
            case 2:
                setProgramInfo({
                    programName: 'HS_INTERNAL_VALUE_PROGRAM_2', 
                    active: {
                        program1: false, 
                        program2: !programInfo.active.program2, 
                        program3: false
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=INSERT_MARKET_SEGMENT_CODE`) // update lenderCode with market segment code from LP
                break;
            case 3:
                setProgramInfo({
                    programName: 'HS_INTERNAL_VALUE_PROGRAM_3', 
                    active: {
                        program1: false, 
                        program2: false, 
                        program3: !programInfo.active.program3
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=INSERT_MARKET_SEGMENT_CODE`) // update lenderCode with market segment code from LP
                break;
            default: // info should match case 1
                setProgramInfo({ 
                    programName: 'HS_INTERNAL_VALUE_PROGRAM_1', 
                    active: {
                        program1: !programInfo.active.program1, 
                        program2: false, 
                        program3: false
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=INSERT_MARKET_SEGMENT_CODE`)
                break;
        }
    }

    const redirectLoanApp = e => {
        window.open(loanUrl, "_blank", "noopener noreferrer")
    };

    const trackGoogleAnalyticsEvent = e => {
            ReactGA.event({
                category: 'Apply Now Button',
                action: 'click',
                label: 'submitted loan application'
            })
    }

    const trackFacebookPixel = () => {
        ReactPixel.track('InitiateCheckout', {
            value: 7200.00,
            currency: 'USD'
        })
    }

    // Get IP address from client for Hubspot analytics
    async function fetchIP() {
        const res = await fetch("https://ip.nf/me.json")
        res
            .json()
            .then(res => setIP(res.ip.ip))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchIP()
    })

    // submit form data to Hubspot, track Google Analytics event, and redirect user to loan application
    const handleSubmit = e => {
        e.preventDefault();
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/3871135/${formID}`
        
        // hsCookie gets the data necessary to track Hubspot analytics
        const hsCookie = document.cookie.split(';').reduce((cookies, cookie) => {
            const [ name, value ] = cookie.split('=').map(c => c.trim());
            cookies[name] = value;
            return cookies;
          }, {});

        //   field names are all set to match internal values on Hubspot
        const data = {
        "fields": [
            {
            "name": "email",
            "value": `${email}`
            },
            {
            "name": "stakeholder_type",
            "value": "Student"
            },
            {
            "name": "program_name",
            "value": `${programInfo.programName}`
            },
            {
            "name": "school",
            "value": `${schoolName}`
            },
            {
            "name": "student_loan_application_status",
            "value": "BLA Click Email Submitted"
            },
            {
            "name": "clicked_begin_loan_application_bla",
            "value": "BLA Click"
            },
        ],
        "context": {
            "hutk": hsCookie.hubspotutk, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
            "pageUri": `${pageUri}`,
            "pageName": `${schoolName} | Skills Fund`,
            "ipAddress": `${IP}`
        }
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('success', response))
        .catch(error => console.log('error: ', error))
        
        trackGoogleAnalyticsEvent()
        trackFacebookPixel()
        redirectLoanApp()
    }

    return (
        <div ref={ref} className="flex flex-col items-center justify-center py-8 mx-2 lg:mx-10 rounded shadow-xl">
            {/* update with school name, remove cost of living if school does not offer it */}
            <h3 className="text-center">Apply for {schoolName} Tuition{costOfLiving && <span> and Cost of Living Funding</span>}</h3>
            <div className="flex justify-center">
                <img className="w-auto" src={marching} alt="People marching and carrying flags" />
            </div>
            {/* update form fields as necessary */}
            <form className="SCHOOL NAME_apply_now program-apply flex flex-col items-center" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input className="applyNowInput" type="email" name="email" placeholder="Enter your email address" onChange={handleChange} value={email} required />
                {multiplePrograms && 
                    <div className="w-1/2">
                        <p className="text-center">Select a {schoolName} program</p>
                        
                        {/* WHEN ADDING AND REMOVING PROGRAMS, PAY ATTENTION TO THE NUMBER AT THE END OF programInfo.active and handleProgramSelect */}
                        <p className={programInfo.active.program1 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(1)}>PROGRAM 1</p>
                        <p className={programInfo.active.program2 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(2)}>PROGRAM 2</p>
                        <p className={programInfo.active.program3 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(3)}>PROGRAM 3</p>
                    </div>
                }
                <div className="hidden">
                    <input type="text" name="Stakeholder Type" value="Student"/>
                    <input type="text" name="Program Name" value={programInfo.programName}/>
                    <input type="text" name="School" value={schoolName}/>
                    <input type="text" name="Student Loan Application Status" value="BLA Click Email Submitted"/>
                    <input type="text" name="Clicked Begin Loan Application BLA" value="BLA Click"/>
                </div>
                <input className="w-40" value="APPLY NOW" id="loanAppSubmitBtn" type="submit"/>
                <p className="mt-5 text-xs italic mb-0 px-8 text-center">Please note: clicking Apply Now will open your loan application in a new tab</p>
            </form>
            {onlinePrograms && 
                <p className="px-8">
                    <strong>ATTENTION ONLINE STUDENTS: </strong>When entering "Applicant Information" within your loan application, <strong>please select {schoolHQState} as "the state of the school you plan to attend."</strong>
                </p>
            }
            <div className="px-8 text-sm">
                <p className="text-center">If you are a cosigner, begin the addendum now by clicking <a className="text-primary" href="https://sf.privateloan.studentloan.org/Cosigner.do?execution=e1s1" rel="noreferrer noopener" target="_blank">here</a>.</p>
                <p className="text-center text-primary cursor-pointer font-bold" onClick={() => toggleDisclaimers(!disclaimers)}>Disclaimers</p>
                {disclaimers && 
                    <div>
                        <p><strong>Before you begin, please read these important notes:</strong></p>
                        <p>Customer identification policy:</p>
                        <p>For the purpose of the following notice, the words "you" and "your" mean the Borrower and the Cosigner. All applicants: Important Federal Law Notice - Important information about procedures for opening a new account: To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.</p>
                        <p>Consent to share data:</p>
                        <p>By clicking the box below and beginning the application, I consent under Federal and state privacy laws to NIMAA providing to Skills Fund information related to my application, enrollment, and completion, including but not limited to information contained in my original application and supplements as well as information regarding my completion, graduation, and post-program outcomes information.</p>
                        <p><strong>While in the application, please note:</strong></p>
                        <p>1. DO NOT use the browser Back button. Using the browser Back button may cause invalid information and delay the processing of your loan.</p>
                        <p>2. Your application will not be complete until it has been signed and submitted along with any required documentation.</p>
                        <p>3. You will need the address and phone number of 3 references to complete your application, including one relative not living with you. Others may be friends, employers, etc.</p>
                    </div>
                }
            </div>
        </div>
    )
})

export default LoanApp