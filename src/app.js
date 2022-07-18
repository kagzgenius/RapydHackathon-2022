import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { NavList } from './components/NavList';

export function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<HomePage />} />
                </Route>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/NavBar" element={<NavList/>} />
            </Routes>
    );
}


