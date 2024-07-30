import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa'; // FaMapMarker is an icon of the list of react (fontawesome) icons

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);  // To either show the full discription or just the first part of it - default is false -> don't show all
  let description = job.description;

  if (!showFullDescription) { // To only show the first 90 chars of the full description
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{job.type}</div>
          <h3 className='text-xl font-bold'>{job.title}</h3>
        </div>

        <div className='mb-5'>{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)} // setShowFullDescription(!showFullDescription) would also toggle the state - a better way to do it is to pass in a function, take the prev state and toggle this
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className='text-indigo-500 mb-2'>{job.salary} / Year</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {job.location}
          </div>
          <a
            to={`/jobs/${job.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default JobListing;
