import React from 'react';
import PropTypes from 'prop-types';

const OtpDetails = (props) => {
	const { otpState } = props;
	return (
		<div>
			<p className="otp-text">The entered OTP is - {otpState}</p>
		</div>
	);
};

OtpDetails.propTypes = {
	otpState: PropTypes.array,
};

export default OtpDetails;
