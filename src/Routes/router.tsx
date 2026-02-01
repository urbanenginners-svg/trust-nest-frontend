
import AuthLayout from '@/layouts/authLayout';
import AuthPage from '@/pages/authPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <AuthPage />
            }
        ]
    }
]);

export default router;