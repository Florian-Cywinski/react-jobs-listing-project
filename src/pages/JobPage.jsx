import { useState, useEffect } from 'react';  // useEffect allows the component to have side effects (here fetching data when the component renders) - useState to put in the fetched data
import { useParams } from 'react-router-dom'; // To get the id of the single job page (e.g. jobs/3)
import Spinner from '../components/Spinner';

const JobPage = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams(); // To get the id of the single job page (e.g. jobs/3)
  const [loading, setLoading] = useState(true);


    // The following is the base way to fetch data from a client side component
  useEffect(() => {   // There are also other ways to fetch data - react suspense is one (render while fetching (with useEffect is't fetch on render)) - react query is onother one (it's third party and easier than fetch data with useEffect) - with React-19 there is a useHook
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally { // This code will run independent whether the try or the catch part runs before
        setLoading(false);
      }
    };

    fetchJob();
  }, []); // [] is the dependency array

  return loading ? <Spinner /> : (<h1>{job.title}</h1>)
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
