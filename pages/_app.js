import { useEffect } from "react";
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Router from 'next/router';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle') : null
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp;
