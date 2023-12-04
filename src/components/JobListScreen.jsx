import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobList, applyForJob } from '../actions/jobActions';

const JobListScreen = () => {
    const dispatch = useDispatch();
    const jobList = useSelector((state) => state.job.jobList) || [];

    useEffect(() => {
        dispatch(getJobList());
    }, [dispatch])

    const handleApply = (jobId) => {
        dispatch(applyForJob(jobId));
    }

  return (
    <div>
      <ul>
        {jobList.map((job) => (
            <li key = {job.id}>
                {job.title}
                <button onClick={() => handleApply(job.id)}>Apply</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default JobListScreen
