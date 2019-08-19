import PropTypes from "prop-types"
import React from "react"
import schoolLogo from "../images/secureset_logo.png" // add school logo to images folder and import here
import skillsFund from "../images/skillsFund_logo.png"

// update school-specific info

const schoolInfo = {
  schoolName: 'SecureSet Academy',
  schoolUrl: 'https://secureset.com/' // update with url of school's website
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col-reverse lg:flex-row justify-around items-center py-8 px-2 lg:px-0 mt-6">
          <a
            href={schoolInfo.schoolUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={schoolLogo} 
              alt={schoolInfo.schoolName}
              className="h-16"
            />
          </a>
          <a
            href="https://skills.fund/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={skillsFund} 
              alt="Skills Fund logo"
              className="h-10"
            />
          </a>
      </div>
    </div>
    <div className="flex justify-center items-center text-center">
      <h3 className="font-light mb-1">{schoolInfo.schoolName} tuition made easy</h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
