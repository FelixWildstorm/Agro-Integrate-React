import { Fragment, useState } from 'react';

// Material-UI
import { Card } from '@mui/material';

// Project Imports
import SignIn from './SignIn';
import VerificationCode from './VerificationCode';


const getStepContent = (
    step,
    handleNext,
    handleBack,
    userData,
    setUserData,
    verificationCode,
    setVerificationCode,
) => {
    switch (step) {
        case 0:
            return (
                <SignIn
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setUserData={setUserData}
                />
            );
        case 1:
            return (
                <VerificationCode
                    handleNext={handleNext}
                    handleBack={handleBack}
                    userData={userData}
                    verificationCode={verificationCode}
                    setVerificationCode={setVerificationCode}
                />
            );
        default:
            throw new Error('Unknown step');
    }
};

export default function AuthenticationWizard() {
    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState({});
    const [verificationCode, setVerificationCode] = useState('');

    // Handle next
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // Handle back 
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Fragment>
            <Card>
                <>
                    {getStepContent(
                        activeStep,
                        handleNext,
                        handleBack,
                        userData,
                        setUserData,
                        verificationCode,
                        setVerificationCode,
                    )}
                </>
            </Card>
        </Fragment>
    );
};