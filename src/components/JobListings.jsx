import JobListing from './JobListing';
import jobs from '../jobs.json'   // To import the jobs array (later an object)

const JobListings = ({ isHome = false }) => {   // isHome comes from HomePage.jsx (<JobListings isHome={true} />)
  const jobListings = isHome ?  jobs.slice(0, 3) : jobs;  // To only show 3 jobs on the home page - on the jobs page it shows all

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobListings.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
      </div>
    </section>
  );
};
export default JobListings;
