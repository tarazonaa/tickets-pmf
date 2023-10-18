import React from 'react';
import Typography from '@mui/material/Typography';
import { tickets2 } from '../Context/RandomTickets'; // adjust the import path

const TicketCount: React.FC = () => {
    const ticketCount = tickets2.length;

    return (
        <Typography variant="h2">
            {ticketCount}
        </Typography>
    );
};

export default TicketCount;