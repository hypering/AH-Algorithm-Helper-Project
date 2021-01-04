import { useEffect } from 'react';

const useGetContestAPI = (setValue) => {
  fetch('http://localhost:4000/contest', {
    method: 'get',
  })
    .then((response) => response.json())
    .then((contest) => {
      setValue(contest);
    });
};

const useGetContestDate = (setValue) => {
  useEffect(() => {
    useGetContestAPI(setValue);
    const countDown = setInterval(() => {
      useGetContestAPI(setValue);
    }, 600000);
    return () => clearInterval(countDown);
  }, []);
};

export default useGetContestDate;