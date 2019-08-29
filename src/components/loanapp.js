import React, { useState } from 'react'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import marching from '../images/PeopleMarchColor.png'
import { UnmountClosed as Collapse } from 'react-collapse'

const LoanApp = React.forwardRef((props, ref) => {

    const [email, setEmail] = useState('')
    const thankYouMsg = 'Thanks for applying! Your loan application has opened in a new window.'
    const [submitted, isSubmitted] = useState(false)
    const [disclaimers, toggleDisclaimers] = useState(false)
    const [programInfo, setProgramInfo] = useState({
        programName: 'CORE Program',
        active: { 
            program1: false,
            program2: false,
            program3: false,
            program4: false,
            program5: false,
            program6: false,
        }
    })
    const [loanUrl, setLoanUrl] = useState(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSCORE17`) // if multiple programs, set lenderCode to first program option
    const formID = '84a22c21-7ecc-401e-a742-2bc6b7c068ad' // get form id for apply now
    const costOfLiving = true // set to false of cost of living is not available
    const multiplePrograms = true // set to false if there is only one program
    const onlinePrograms = false // set to true if there is at least one online/remote program offered
    const schoolHQState = 'NY' // two letter abbreviation for school headquarters state

    const activeClass = "cursor-pointer border-2 rounded border-black text-center py-2 text-white bg-primary mb-2" // highlights selected option in loan app form
    const inactiveClass = "cursor-pointer border-2 rounded border-black text-center py-2 mb-2"

    const handleChange = e => {
        setEmail(e.target.value)
    }

    // update segment code and programName (must match internal value on Hubspot form)
    const handleProgramSelect = programNumber => {
        switch(programNumber) {
            case 1: // info should match default
                setProgramInfo({
                    programName: 'CORE Program', 
                    active: {
                        program1: !programInfo.active.program1, 
                        program2: false, 
                        program3: false,
                        program4: false,
                        program5: false,
                        program6: false,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSCORE17`) // update lenderCode with market segment code from LP
                break;
            case 2:
                setProgramInfo({
                    programName: 'CORE Program + Cert', 
                    active: {
                        program1: false, 
                        program2: !programInfo.active.program2, 
                        program3: false,
                        program4: false,
                        program5: false,
                        program6: false,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSCOCE17`) // update lenderCode with market segment code from LP
                break;
            case 3:
                setProgramInfo({
                    programName: 'PATH Program', 
                    active: {
                        program1: false, 
                        program2: false, 
                        program3: !programInfo.active.program3,
                        program4: false,
                        program5: false,
                        program6: false,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSCOEV17`) // update lenderCode with market segment code from LP
                break;
            case 4:
                setProgramInfo({
                    programName: 'PATH Program + Cert', 
                    active: {
                        program1: false, 
                        program2: false, 
                        program3: false,
                        program4: !programInfo.active.program4,
                        program5: false,
                        program6: false,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSCCEV17`) // update lenderCode with market segment code from LP
                break;
            case 5:
                setProgramInfo({
                    programName: 'HUNT Program', 
                    active: {
                        program1: false, 
                        program2: false, 
                        program3: false,
                        program4: false,
                        program5: !programInfo.active.program5,
                        program6: false,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSHUNT17`) // update lenderCode with market segment code from LP
                break;
            case 6:
                setProgramInfo({
                    programName: 'HUNT Program + Cert', 
                    active: {
                        program1: false, 
                        program2: false, 
                        program3: false,
                        program4: false,
                        program5: false,
                        program6: !programInfo.active.program6,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSHUCE17`) // update lenderCode with market segment code from LP
                break;
            default: // info should match case 1
                setProgramInfo({ 
                    programName: 'CORE Program', 
                    active: {
                        program1: !programInfo.active.program1, 
                        program2: false, 
                        program3: false,
                        program4: false,
                        program5: false,
                        program6: false,
                    }
                })
                setLoanUrl(`https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SASSCORE17`)
                break;
        }
    }

    const redirectLoanApp = () => {
        window.open(loanUrl, "_blank", "noopener noreferrer")
    };

    const trackGoogleAnalyticsEvent = () => {
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
            "name": "select_a_secureset_program", // update school name to match form field on Hubspot
            "value": `${programInfo.programName}`
            },
            {
            "name": "school",
            "value": `${props.schoolName}`
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
            "pageUri": `${props.pageUri}`,
            "pageName": `${props.schoolName} | Skills Fund`,
            "ipAddress": `${props.IP}`
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
        isSubmitted(true)
    }

    return (
        <div ref={ref} className="flex flex-col items-center justify-center pt-8 mx-2 lg:mx-10 rounded shadow-xl bg-purple-150">
            <h2>Loan Application</h2>
            <div className="rounded shadow-2xl pt-8 px-8 mx-4 bg-white">
                {/* update with school name, remove cost of living if school does not offer it */}
                <h3 className="text-center font-normal">{props.schoolName} Tuition{costOfLiving && <span> and Cost of Living</span>} Financing</h3>
                <div className="flex justify-center">
                    <img className="w-auto" src={marching} alt="People marching and carrying flags" loading="lazy"/>
                </div>
            {/* update form fields as necessary */}
            <form className="SecureSet_apply_now program-apply flex flex-col items-center" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input className="border-2 rounded border-primary text-center py-2 mb-4 w-64" type="email" name="email" placeholder="Enter your email address" onChange={handleChange} value={email} required />
                {multiplePrograms && 
                    <div className="w-full lg:w-1/2 px-8 lg:px-0">
                        <p className="text-center text-sm">Select a {props.schoolName} program</p>
                        
                        {/* WHEN ADDING AND REMOVING PROGRAMS, PAY ATTENTION TO THE NUMBER AT THE END OF programInfo.active and handleProgramSelect */}
                        <p className={programInfo.active.program1 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(1)}>CORE Program</p>
                        <p className={programInfo.active.program2 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(2)}>CORE Program + Cert</p>
                        <p className={programInfo.active.program3 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(3)}>PATH Program</p>
                        <p className={programInfo.active.program4 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(4)}>PATH Program + Cert</p>
                        <p className={programInfo.active.program5 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(5)}>HUNT Program</p>
                        <p className={programInfo.active.program6 ? activeClass : inactiveClass} onClick={() => handleProgramSelect(6)}>HUNT Program + Cert</p>
                    </div>
                }
                <div className="hidden">
                    <input type="text" name="Stakeholder Type" value="Student" readOnly/>
                    <input type="text" name="Program Name" value={programInfo.programName} readOnly/>
                    <input type="text" name="School" value={props.schoolName} readOnly/>
                    <input type="text" name="Student Loan Application Status" value="BLA Click Email Submitted" readOnly/>
                    <input type="text" name="Clicked Begin Loan Application BLA" value="BLA Click" readOnly/>
                </div>
                {submitted ? thankYouMsg : <input className="opacityApply uppercase bg-primary p-3 my-4 w-48 rounded-full shadow-lg text-white cursor-pointer" value="APPLY NOW" id="loanAppSubmitBtn" type="submit"/>}
                {!submitted && <p className="mt-3 text-xs italic">Please note: clicking Apply Now will open your loan application in a new tab</p>}
            </form>
            </div>
            {onlinePrograms && 
                <p className="px-8">
                    <strong>ATTENTION ONLINE STUDENTS: </strong>When entering "Applicant Information" within your loan application, <strong>please select {schoolHQState} as "the state of the school you plan to attend."</strong>
                </p>
            }
            <div className="px-8 text-sm">
                <p className="text-center mt-8">If you are a cosigner, begin the addendum now by clicking <a className="text-primary" href="https://sf.privateloan.studentloan.org/Cosigner.do?execution=e1s1" rel="noreferrer noopener" target="_blank">here</a>.</p>
                <p className="text-center text-primary cursor-pointer font-bold" onClick={() => toggleDisclaimers(!disclaimers)}>Disclaimers</p>
            <Collapse isOpened={disclaimers} springConfig={{stiffness: 150, damping: 40}}>
                <div>
                    <p><strong>Before you begin, please read these important notes:</strong></p>
                    <p>Customer identification policy:</p>
                    <p>For the purpose of the following notice, the words "you" and "your" mean the Borrower and the Cosigner. All applicants: Important Federal Law Notice - Important information about procedures for opening a new account: To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.</p>
                    <p>Consent to share data:</p>
                    <p>By clicking the box below and beginning the application, I consent under Federal and state privacy laws to NIMAA providing to Skills Fund information related to my application, enrollment, and completion, including but not limited to information contained in my original application and supplements as well as information regarding my completion, graduation, and post-program outcomes information.</p>
                    <p><strong>While in the application, please note:</strong></p>
                    <p>1. DO NOT use the browser Back button. Using the browser Back button may cause invalid information and delay the processing of your loan.</p>
                    <p>2. Your application will not be complete until it has been signed and submitted along with any required documentation.</p>
                    <p className="mb-0 pb-4">3. You will need the address and phone number of 3 references to complete your application, including one relative not living with you. Others may be friends, employers, etc.</p>
                </div>
            </Collapse>
            </div>
        </div>
    )
})

export default LoanApp