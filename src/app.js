import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';


export function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<HomePage />} />
                    <Route path="/dashboard" element={<HomePage />}></Route>
                    <Route path="/team" element={<HomePage />}></Route>
                    <Route path="/projects" element={<HomePage />}></Route>
                </Route>
                    <Route path="/login" element={<Login/>} />
            </Routes>
    );
}


