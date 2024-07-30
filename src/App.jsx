import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';  // Parent route (all routes in this use the main layout)
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;