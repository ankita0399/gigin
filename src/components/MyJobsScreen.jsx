import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppliedJobs } from '../actions/jobActions';

const MyJobsScreen = () => {
    const dispatch = useDispatch();
    const appliedJobs = useSelector((state) => state.job.appliedJobs) || [];

    useEffect(() => {
        dispatch(getAppliedJobs());
    }, [dispatch])

  return (
    <div>
      <ul>
        {appliedJobs.map((job) => (
            <li key = {job.id}>
                {job.title}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default MyJobsScreen
