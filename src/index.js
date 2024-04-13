import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from "react-router-dom";
import router from "./Routes";


createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>

);
