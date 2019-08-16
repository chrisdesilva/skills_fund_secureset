import React from 'react'
import GeneralTerms from './generalterms'
import InterestOnlyTerms from './interestonlyterms'
import ImmRepaymentTerms from './immrepaymentterms'

// update with school-specific info
const schoolInfo = {
    interestRate36: '9.49%',
    interestRate60: '11.46%',
    interestOnly: {
        programName: 'CORE Program with/without the certification and the HUNT Program with the certification',
        APR36: '11.52%',
        financeCharge36: '$2,567.11',
        IOPayment36: '$82.25',
        FullMonthlyPayment36: '$333.09',
        APR60: '12.92%',
        financeCharge60: '$4,406.10',
        IOPayment60: '$99.32',
        FullMonthlyPayment60: '$228.51',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,4000',
        programLength: '5' // program length in months
    },
    interestOnly2: {
        programName: 'HUNT Program without the certification',
        APR36: '11.67%',
        financeCharge36: '$2,402.62',
        IOPayment36: '$82.25',
        FullMonthlyPayment36: '$333.09',
        APR60: '12.99%',
        financeCharge60: '$4,207.46',
        IOPayment60: '$99.32',
        FullMonthlyPayment60: '$228.51',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '3' // program length in months
    },
    immediateRepayment: { // set values to empty strings if no IR option is available
        programName: 'PATH Program with/without the certification',
        APR36: '12.20%',
        financeCharge36: '$1,991.39',
        FullMonthlyPayment36: '$333.09',
        APR60: '13.19%',
        financeCharge60: '$3,710.86',
        FullMonthlyPayment60: '$228.51',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
    }
}
const multipleLoanLengths = true // true if both 36 and 60 month options are available
const multipleLoanTypes = true // true if both IR and IO are available

const TermInfo = () => (
    <div className="border-2 border-gray-300 shadow-xl rounded-lg text-center m-2 lg:m-10 p-8">
       <h2 className="mt-4">More Info On Terms</h2>
        <div>
            <GeneralTerms 
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
                interestRate36={schoolInfo.interestRate36}
                interestRate60={schoolInfo.interestRate60}
                IOAPR36={schoolInfo.interestOnly.APR36}
                IOAPR60={schoolInfo.interestOnly.APR60}
                IRAPR36={schoolInfo.immediateRepayment.APR36}
                IRAPR60={schoolInfo.immediateRepayment.APR60}
            />

            <InterestOnlyTerms
                programName={schoolInfo.interestOnly2.programName} 
                loanExampleAmt={schoolInfo.interestOnly2.LoanExampleAmt}
                APR36={schoolInfo.interestOnly2.APR36}
                APR60={schoolInfo.interestOnly2.APR60}
                finCharge36={schoolInfo.interestOnly2.financeCharge36}
                finCharge60={schoolInfo.interestOnly2.financeCharge60}
                ioPayment36={schoolInfo.interestOnly2.IOPayment36}
                ioPayment60={schoolInfo.interestOnly2.IOPayment60}
                fullPayment36={schoolInfo.interestOnly2.FullMonthlyPayment36}
                fullPayment60={schoolInfo.interestOnly2.FullMonthlyPayment60}
                oFee={schoolInfo.interestOnly2.LoanExampleOFeeAmt}
                loanPlusOFee={schoolInfo.interestOnly2.LoanExampleAmtPlusOFee}
                programLength={schoolInfo.interestOnly2.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />

            <InterestOnlyTerms
                programName={schoolInfo.interestOnly.programName} 
                loanExampleAmt={schoolInfo.interestOnly.LoanExampleAmt}
                APR36={schoolInfo.interestOnly.APR36}
                APR60={schoolInfo.interestOnly.APR60}
                finCharge36={schoolInfo.interestOnly.financeCharge36}
                finCharge60={schoolInfo.interestOnly.financeCharge60}
                ioPayment36={schoolInfo.interestOnly.IOPayment36}
                ioPayment60={schoolInfo.interestOnly.IOPayment60}
                fullPayment36={schoolInfo.interestOnly.FullMonthlyPayment36}
                fullPayment60={schoolInfo.interestOnly.FullMonthlyPayment60}
                oFee={schoolInfo.interestOnly.LoanExampleOFeeAmt}
                loanPlusOFee={schoolInfo.interestOnly.LoanExampleAmtPlusOFee}
                programLength={schoolInfo.interestOnly.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />

            {multipleLoanTypes && 
                <ImmRepaymentTerms
                    programName={schoolInfo.immediateRepayment.programName} 
                    loanExampleAmt={schoolInfo.immediateRepayment.LoanExampleAmt}
                    APR36={schoolInfo.immediateRepayment.APR36}
                    APR60={schoolInfo.immediateRepayment.APR60}
                    finCharge36={schoolInfo.immediateRepayment.financeCharge36}
                    finCharge60={schoolInfo.immediateRepayment.financeCharge60}
                    fullPayment36={schoolInfo.immediateRepayment.FullMonthlyPayment36}
                    fullPayment60={schoolInfo.immediateRepayment.FullMonthlyPayment60}
                    oFee={schoolInfo.immediateRepayment.LoanExampleOFeeAmt}
                    loanPlusOFee={schoolInfo.immediateRepayment.LoanExampleAmtPlusOFee}
                    multipleLoanLengths={multipleLoanLengths}
                    multipleLoanTypes={multipleLoanTypes}
                />
            }
        </div>
    </div>
)

export default TermInfo