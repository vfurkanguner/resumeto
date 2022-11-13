import React from 'react';
import { Router, Link } from '@reach/router';
import App from './App';
import ResumeView from './ResumeView';

const MainRouter = () => (
    <Router>
        <App path="/" /> 
        <ResumeView path="/cv/:resumeSlug" /> 
    </Router>
)


export default MainRouter;