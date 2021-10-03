import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const OtpInput = (props) => {
	const { handleOtpInput, otpState, handleBackSpace } = props;
	return (
		<div>
			<form>
				<Input
					className="otp-field "
					type='number'
					inputProps={{ maxLength: 1 }}
					autoFocus
					value={otpState[0]}
					onChange={(e) => handleOtpInput(e.target)}
					onKeyDown={(e) => handleBackSpace(e)}
				/>
				<Input
					className="otp-field "
					type='number'
					inputProps={{ maxLength: 1 }}
					value={otpState[1]}
					onChange={(e) => handleOtpInput(e.target)}
					onKeyDown={(e) => handleBackSpace(e)}
				/>
				<Input
					className="otp-field "
					type='number'
					inputProps={{ maxLength: 1 }}
					value={otpState[2]}
					onChange={(e) => handleOtpInput(e.target)}
					onKeyDown={(e) => handleBackSpace(e)}
				/>
				<Input
					className="otp-field "
					type='number'
					inputProps={{ maxLength: 1 }}
					value={otpState[3]}
					onChange={(e) => handleOtpInput(e.target)}
					onKeyDown={(e) => handleBackSpace(e)}
				/>
				<Input
					className="otp-field "
					type='number'
					inputProps={{ maxLength: 1 }}
					value={otpState[4]}
					onChange={(e) => handleOtpInput(e.target)}
					onKeyDown={(e) => handleBackSpace(e)}
				/>
				<Input
					className="otp-field "
					type='number'
					inputProps={{ maxLength: 1 }}
					value={otpState[5]}
					onChange={(e) => handleOtpInput(e.target)}
					onKeyDown={(e) => handleBackSpace(e)}
				/>
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
