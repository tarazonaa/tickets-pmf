import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { countCategories } from './CountCategories'; // adjust the import path

const CategoryChart: React.FC = () => {
    const categoryCounts = countCategories();
    const data = Object.keys(categoryCounts).map(categoryId => ({
        categoryId,
        count: categoryCounts[categoryId]
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="categoryId" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    );
};

export default CategoryChart;