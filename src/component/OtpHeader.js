import React from 'react'
import PropTypes from 'prop-types';

import '../assets/styles/OtpScreen.scss';

const OtpHeader = (props) => {
	const { headerText, otpText } = props;
	return (
		<div className="otp-header">
			<h1>{headerText}</h1>
			<p>{otpText}</p>
		</div>
	)
}

OtpHeader.propTypes = {
	headerText: PropTypes.string,
	otpText: PropTypes.string,
};

export default OtpHeader;

