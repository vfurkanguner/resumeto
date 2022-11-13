import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const useAPI = (getter, params = {}) => {
    const [loading, setLoading ] = useState(true);
    const [data, setData] = useState();
    useEffect(() => {
            getter(params)
            .then(jsonResponse => {
                setData(jsonResponse);
                setLoading(false);
            });
    }, []);
    return {loading, data};
};