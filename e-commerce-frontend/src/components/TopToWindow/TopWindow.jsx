


import { useEffect } from 'react';
const TopWindow = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default TopWindow