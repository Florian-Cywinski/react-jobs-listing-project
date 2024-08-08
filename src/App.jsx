import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';  // Parent route (all routes in this use the main layout)
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
// import JobPage from './pages/JobPage';       // Fetch data with useState and useEffect - JobPage is default export
import JobPage, { jobLoader } from './pages/JobPage';   // Fetch data with jobLoader - JobPage is default export and jobLoader is another export of JobPage.jsx (export { JobPage as default, jobLoader };)
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {

  // On larger projects one could put the following requests in a separat file called service

  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    // console.log('delete', id);
    
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        {/* <Route path='/jobs/:id' element={<JobPage />} />   The : signifies that it is dynamic - Fetch data with useState and useEffect */}
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />  {/* The : signifies that it is dynamic - Fetch data with jobLoader */} {/* Pass Function deleteJob as Prop */}
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />  {/* Pass Function as Prop */}
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;