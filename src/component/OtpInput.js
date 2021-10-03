import React from 'react';
import PropTypes from 'prop-types';

import OtpInputScreen from './OtpInputScreen';
import '../assets/styles/OtpScreen.scss';

const OtpInput = (props) => {
	const { handleOtpInput, otpState, handleBackSpace } = props;
	const otp = Array.from({ length: 6 });

	return (
		<div>
			<form className="container-class">
				{
					otp.map((value, index) => {
						return (
							<OtpInputScreen
								key={index}
								index={index}
								inputAutoFocus={index === 0 ? true : false}
								handleOtpInput={handleOtpInput}
								handleBackSpace={handleBackSpace}
								otpState={otpState}
								inputClassName="otp-field "
								inputType='number'
							/>
						)
					})
				}
			</form>
		</div>
	)
}

OtpInput.propTypes = {
	handleOtpInput: PropTypes.func,
	handleBackSpace: PropTypes.func,
	otpState: PropTypes.array,
};

export default OtpInput;
