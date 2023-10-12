import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { TicketRecord } from '../../../Components/Context/TicketRecord';

export const TicketCard: React.FC<{ record: TicketRecord }> = ({ record }) => (
    <Link to={`/tickets/${record.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ borderRadius: '15px', margin: '10px', cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h5">{record.title}</Typography>
                <Typography variant="body2">Description: {record.description}</Typography>
                <Typography variant="body2">Category ID: {record.categoryId}</Typography>
                <Typography variant="body2">Subcategory Index: {record.subcategoryIndex}</Typography>
                <Typography variant="body2">Priority: {record.priority}</Typography>
                <Typography variant="body2">Intermediaries: {record.intermediaries}</Typography>
                <Typography variant="body2">Status: {record.status}</Typography>
                <Typography variant="body2">Created At: {record.createdAt}</Typography>
                <Typography variant="body2">ID: {record.id}</Typography>
                <Typography variant="body2">Closed At: {record.closedAt}</Typography>
                <Typography variant="body2">Classroom ID: {record.classroomId}</Typography>
            </CardContent>
        </Card>
    </Link>
);
