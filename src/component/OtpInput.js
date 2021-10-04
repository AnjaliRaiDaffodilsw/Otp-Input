import React from 'react';
import PropTypes from 'prop-types';

import OtpInputScreen from './OtpInputScreen';
import '../assets/styles/OtpScreen.scss';

const OtpInput = (props) => {
	const {
		handleOtpInput,
		otpState,
		handleBackSpace,
		inputClassName,
		inputType
	} = props;
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
								handleOtpInput={handleOtpInput}
								handleBackSpace={handleBackSpace}
								otpState={otpState}
								inputClassName={inputClassName}
								inputType={inputType}
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
	inputClassName: PropTypes.string,
	inputType: PropTypes.string,
};

export default OtpInput;
