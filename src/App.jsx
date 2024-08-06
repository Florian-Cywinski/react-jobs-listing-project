import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';  // Parent route (all routes in this use the main layout)
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
// import JobPage from './pages/JobPage';       // Fetch data with useState and useEffect - JobPage is default export
import JobPage, { jobLoader } from './pages/JobPage';   // Fetch data with jobLoader - JobPage is default export and jobLoader is another export of JobPage.jsx (export { JobPage as default, jobLoader };)
import AddJobPage from './pages/AddJobPage';

const App = () => {
  const addJob = (newJob) => {
    console.log(newJob);
    
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        {/* <Route path='/jobs/:id' element={<JobPage />} />   The : signifies that it is dynamic - Fetch data with useState and useEffect */}
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />  {/* The : signifies that it is dynamic - Fetch data with jobLoader */}
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />  {/* Pass Function as Prop */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;