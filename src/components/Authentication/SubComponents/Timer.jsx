import React, { useState, useEffect } from 'react';

// Material-UI
import { Typography } from '@mui/material';


export default function Timer() {
    const [seconds, setSeconds] = useState(20);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('Done');
        }
    }, [seconds]);

    return (
        <div>
             <Typography variant="subtitle2">
               {seconds}
             </Typography>
        </div>
    );
};
