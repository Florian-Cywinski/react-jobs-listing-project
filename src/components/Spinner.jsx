import ClipLoader from 'react-spinners/ClipLoader'; // https://www.davidhu.io/react-spinners/   // https://github.com/davidhu2000/react-spinners

const override = {  // Style for the Spinner
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {  // from jobListings.jsx component -> <Spinner loading={loading} />
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}  // To be able to set custom styles to center it
      size={150}
    />
  );
};
export default Spinner;
