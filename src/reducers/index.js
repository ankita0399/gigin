import { combineReducers } from 'redux';

const intialState = {
    user: null,
    jobList: [],
    appliedJobs: [],
};

const jobReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_JOB_LIST':
            return {
                ...state,
                jobList: action.jobList,
            };
        case 'SET_APPLIED_JOBS':
            return {
                ...state,
                appliedJobs: action.appliedJobs,
            };
        default:
            return state;
    }   
}

const rootReducer = combineReducers({
    job: jobReducer,
})

export default rootReducer;