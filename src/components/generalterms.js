import React from 'react'

const GeneralTerms = props => (
    <div>

        {/* -----WEB VERSION----- */}

        <div className="p-0 md:p-4 hidden lg:inline">
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white">Skills Fund Loan</th>
                        <th className="bg-secondary text-center text-white" colSpan={!props.multipleLoanLengths && "2"}>36 Month</th>
                        {props.multipleLoanLengths && <th className="bg-secondary text-center text-white">60 Month</th>}
                    </tr>
                    <tr>
                        <td className="text-center">Cosigners</td>
                        <td className="text-center" colSpan="2">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center bg-gray-100">Origination Fee</td>
                        <td className="text-center bg-gray-100" colSpan="2">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Interest Rate (2)</td>
                        <td className="text-center" colSpan={!props.multipleLoanLengths && "2"}>Fixed<br /> {props.interestRate36} interest rate, {props.IOAPR36}{props.multipleLoanTypes && <span> - {props.IRAPR36}</span>} estimated APR</td> 
                        {props.multipleLoanLengths && <td className="text-center">Fixed<br /> {props.interestRate60} interest rate, {props.IOAPR60}{props.multipleLoanTypes && <span> - {props.IRAPR60}</span>} estimated APR</td>} 
                    </tr>
                    <tr>
                        <td className="text-center bg-gray-100">Capitalization of Interest</td>
                        <td className="text-left bg-gray-100" colSpan="2"><strong>Interest-Only Loans:</strong> Interest not capitalized unless payments not made. 
                        {props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Interest not capitalized unless payments not made.</span>} </td>
                    </tr>
                    <tr>
                        <td className="text-center">Payments Required While Enrolled?</td>
                        <td className="text-left" colSpan="2"><strong>Interest-Only Loans:</strong> Monthly interest payments are required.
                        {props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Yes, full payments (interest + principal) are mandatory roughly one month after loan is disbursed.</span>} </td>
                    </tr>
                    <tr>
                        <td className="text-center bg-gray-100">Grace Period</td>
                        <td className="text-left bg-gray-100" colSpan="2">Two-month period after the in-school period, following official program completion, and before interest and principal repayment begins. (3)<br /><br />
                        <strong>Interest-Only Loans:</strong> Interest-only payments are required while in school and in the grace period.
                        {props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> None, full repayments start roughly one month after loan is disbursed.</span> }</td>
                    </tr>
                    <tr>
                        <td className="text-center">Post-Grace Period</td>
                        <td className="text-left" colSpan="2"><strong>Interest-Only Loans:</strong> Full repayments (principal and interest) are required.
                        {props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Full repayments (principal and interest) are required.</span> }</td>
                    </tr>
                    <tr>
                        <td className="text-center bg-gray-100">Principal and Interest Repayment Term</td>
                        <td className="text-center bg-gray-100" colSpan={!props.multipleLoanLengths && "2"}>36 months (3 years)</td> 
                        {props.multipleLoanLengths && <td className="text-center bg-gray-100">60 months (5 years)</td> }
                    </tr>
                </tbody>
            </table>
        </div>

        {/* -----MOBILE VERSION----- */}

        <div className="p-0 md:p-4 lg:hidden">
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white">Skills Fund Loan - 36 Months</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Cosigners</td>
                    </tr>
                    <tr>
                        <td className="text-center">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100 bg-gray-100">Origination Fee</td>
                    </tr>
                    <tr>
                        <td className="text-center">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Interest Rate (2)</td>
                    </tr>
                    <tr>
                        <td className="text-center">Fixed<br /> {props.interestRate36} interest rate,<br/> {props.IOAPR36}{props.multipleLoanTypes && <span> - {props.IRAPR36}</span>} estimated APR</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Capitalization of Interest</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Interest not capitalized unless payments not made.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Interest not capitalized unless payments not made.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Payments Required While Enrolled?</td> 
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Monthly interest payments are required.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Yes, full payments (interest + principal) are mandatory roughly one month after loan is disbursed.</span>}</td>
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center">Two-month period after the in-school period, following official program completion, and before interest and principal repayment begins. (3)<br /><br />
                        <strong>Interest-Only Loans:</strong> Interest-only payments are required while in school and in the grace period.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> None, full repayments start roughly one month after loan is disbursed.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Post-Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Full repayments (principal and interest) are required.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Full repayments (principal and interest) are required.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Principal and Interest Repayment Term</td> 
                    </tr>
                    <tr>
                        <td className="text-center">36 months (3 years)</td> 
                    </tr>
                    {props.multipleLoanLengths &&
                    <div>
                        <tr>
                        <th className="bg-secondary text-center text-white">Skills Fund Loan - 60 Months</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Cosigners</td>
                    </tr>
                    <tr>
                        <td className="text-center">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Origination Fee</td>
                    </tr>
                    <tr>
                        <td className="text-center">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Interest Rate (2)</td>
                    </tr>
                    <tr>
                        <td className="text-center">Fixed<br /> {props.interestRate60} interest rate,<br/> {props.IOAPR60}{props.multipleLoanTypes && <span> - {props.IOAPR60}</span>} estimated APR</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Capitalization of Interest</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Interest not capitalized unless payments not made.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Interest not capitalized unless payments not made.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Payments Required While Enrolled?</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Monthly interest payments are required.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Yes, full payments (interest + principal) are mandatory roughly one month after loan is disbursed.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center">Two-month period after the in-school period, following official program completion, and before interest and principal repayment begins. (3)<br /><br />
                        <strong>Interest-Only Loans:</strong> Interest-only payments are required while in school and in the grace period.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> None, full repayments start roughly one month after loan is disbursed.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Post-Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Full repayments (principal and interest) are required.{props.multipleLoanTypes && <span><br/><br/><strong>Immediate Repayment Loans:</strong> Full repayments (principal and interest) are required.</span>}</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Principal and Interest Repayment Term</td>
                    </tr>
                    <tr>
                        <td className="text-center">60 months (5 years)</td> 
                    </tr>
                    </div>
                    }
                </tbody>
            </table>
        </div>
    </div>
)

export default GeneralTerms