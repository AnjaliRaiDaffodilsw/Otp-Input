import React from 'react'
import PropTypes from 'prop-types';

const OtpHeader = (props) => {
	const { headerText, otpText } = props;
	return (
		<div className="text-center otp-header">
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

