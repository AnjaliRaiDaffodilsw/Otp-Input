import React, { useState } from 'react';

import OtpHeader from './OtpHeader';
import OtpInput from './OtpInput';
import '../assets/styles/OtpInputScreen.css';
import OtpDetails from './OtpDetails';

const OtpLayout = () => {
	const [otp, setOtp] = useState(Array.from({ length: 6 }));

	const handleBackSpace = (e) => {
		const { form } = e.target;
		const indexOfInput = Array.prototype.indexOf.call(form, e.target);
		if (e.keyCode === 8) {
			form.elements[indexOfInput !== 0 ? indexOfInput - 1 : indexOfInput].focus();
			const newOTP = [...otp];
			newOTP[indexOfInput] = '';
			setOtp(newOTP);
		}
	};

	const handleOtpInput = (target) => {
		const { form, value } = target;
		let newOTP = [...otp];
		const indexOfInput = Array.prototype.indexOf.call(form, target);
		if (value) {
			//for setting the focus
			form.elements[indexOfInput < 5 ? indexOfInput + 1 : indexOfInput].focus();
			newOTP[indexOfInput] = value;
		}
		if (value.length > 1) {
			//for destructuring the copy pasted otp
			console.log(indexOfInput)
			newOTP = [...otp.slice(0, indexOfInput), ...value.split('')].slice(0, 6);
			//for focus
			const focusedInputIndex = newOTP.length <= 5 ? newOTP.length : 5;
			form.elements[focusedInputIndex].focus();
		}
		setOtp(newOTP);
	};

	return (
		<>
			<OtpHeader
				headerText={'Welcome to OTP screen'}
				otpText={'Enter your OTP below'}
			/>
			<div className="container-class">
				<OtpInput
					otpState={otp}
					handleOtpInput={handleOtpInput}
					handleBackSpace={handleBackSpace}
				/>
			</div>
			<OtpDetails
				otpState={otp}
			/>
		</>
	);
};

export default OtpLayout;
