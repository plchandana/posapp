import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AdminDashboard from "../pages/admin/AdminDashboard";

const RootRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/" element={<SignUp/>}/>
                
            <Route path="/admin-dash" element={<AdminDashboard/>}/>
            </Routes>
        </Router>
    )
}

export default RootRoutes;
