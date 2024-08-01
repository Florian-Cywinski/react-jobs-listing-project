import JobListing from './JobListing';
// import jobs from '../jobs.json'   // To import the jobs array (later an object)
import { useState, useEffect } from 'react';  // useEffect allows the component to have side effects (here fetching data when the component renders) - useState to put in the fetched data

const JobListings = ({ isHome = false }) => {   // isHome comes from HomePage.jsx (<JobListings isHome={true} />)
  // const jobListings = isHome ?  jobs.slice(0, 3) : jobs;  // To only show 3 jobs on the home page - on the jobs page it shows all
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally { // This code will run independent whether the try or the catch part runs before
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // [] is the dependency array

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
      </div>
    </section>
  );
};
export default JobListings;