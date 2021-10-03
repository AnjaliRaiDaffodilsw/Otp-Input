import React from 'react'
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

import '../assets/styles/OtpInputScreen.css';

const OtpInputScreen = (props) => {
	const {
		handleOtpInput,
		otpState,
		handleBackSpace,
		index,
		inputType,
		inputClassName,
		inputAutoFocus
	} = props;

	return (
		<div>
			<Input
				key={index}
				className={inputClassName}
				type={inputType}
				value={otpState[index]}
				autoFocus={inputAutoFocus}
				onChange={(e) => handleOtpInput(e.target)}
				onKeyDown={(e) => handleBackSpace(e)}
			/>
		</div>
	)
}

OtpInputScreen.propTypes = {
	handleOtpInput: PropTypes.func,
	otpState: PropTypes.array,
	handleBackSpace: PropTypes.func,
	index: PropTypes.number,
	inputType: PropTypes.string,
	inputClassName: PropTypes.string,
	inputAutoFocus: PropTypes.string,
};

export default OtpInputScreen
