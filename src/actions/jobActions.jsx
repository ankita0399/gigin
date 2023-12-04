import { loginApi, getJobListApi, applyForJobApi } from '../api';

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const setJobList = (jobList) => ({
    type: 'SET_JOB_LIST',
    payload: jobList,
});

export const setAppliedJobs = (appliedJobs) => ({
    type: 'SET_APPLIED_JOBS',
    payload: appliedJobs,
}); 

export const login = (email, password) => async(dispatch) => {
    try{
        const user = await loginApi(email, password);
        dispatch(setUser(user))
    }
    catch(error){
        console.log(error);
    }
};

export const getJobList = () => async(dispatch) => {   
    try{
        const jobList = await getJobListApi(getJobList.employeeId);
        dispatch(setJobList(jobList));
    }
    catch(error){
        console.log(error);
    }
}

export const applyForJob = (jobId) => async(dispatch) => {  
    try{
        const appliedJobs = await applyForJobApi(jobId);
        dispatch(setAppliedJobs(appliedJobs));
    }
    catch(error){
        console.log(error);
    }
}

export const getAppliedJobs = () => async(dispatch) => {    
    try{
        const appliedJobs = [];
        dispatch(setAppliedJobs(appliedJobs));
    }
    catch(error){
        console.log(error);
    }
}

