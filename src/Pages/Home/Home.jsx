import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData()
  // console.log("User lodderData",data)
  return (
    <div>
      <Banner></Banner>
      <Books data = {data}></Books>
    </div>
  );
};

export default Home;