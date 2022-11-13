import React from 'react';
import { getResumeData } from './api';
import ContentLayout from './components/layout/ContentLayout';
import { useAPI } from './hooks/useAPI';

const ResumeView = ({ resumeSlug }) => {
    const { loading, data } = useAPI(getResumeData, { slug: resumeSlug });
    if (loading) {
        return <div>loading...</div>
    };
    console.log('hello', data);
    return <div>
        <ContentLayout
            Footer={
                <div>Lets put a footer here like: 
                    Create your own resume 
                </div>
                }
                {...data}
        />
    </div>
}

export default ResumeView;