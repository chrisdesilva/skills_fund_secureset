import React from 'react'
import HubspotForm from 'react-hubspot-form'
import ebook from '../images/ebook.jpg'

// update formId in HubspotForm

const LeadCaptureForm = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <h2>Get a Head Start</h2>
            <div>
                <img className="h-64" src={ebook} alt="step-by-step guide to paying for your program" loading="lazy"/>
            </div>
            <div className="mx-10 rounded flex flex-col pt-5 px-4 mt-5 justify-center items-center">
                <p>We'll send you our step-by-step guide to paying for your program.</p>
                <HubspotForm 
                    portalId='3871135'
                    formId='c7688725-624e-435c-8add-8409a327eecb'
                />
            </div>
        </div>
    )
}

export default LeadCaptureForm