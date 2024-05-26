import { auth } from '../firebase';
import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../components/Login';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {

  const [ user,loading ] = useAuthState(auth);

  if(!user){
    return <Login />;
  }
 
  if(loading){
    return <Loading />
  }
  
  return <Component {...pageProps} />
}

export default MyApp
