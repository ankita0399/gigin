import {BASE_URL} from './config';

export const loginApi = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}Api_controller/login_email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        return data;
    }
    catch(error){
    console.log(error);
    }
}

export const getJobListApi = async () => {
    try {
        const response = await fetch(`${BASE_URL}Api_controller/get_jobs`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;
    }
    catch(error){
    console.log(error);
    }
}

export const applyForJobApi = async (jobId, userId) => {    
    try {
        const response = await fetch(`${BASE_URL}Api_controller/apply_job`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jobId, userId }),
        });

        const data = await response.json();
        return data;
    }
    catch(error){
    console.log(error);
    }
}