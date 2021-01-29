import { useEffect } from 'react';
import API from '../lib/api';

const useGetContestAPI = async (setValue) => {
  const contestDatas = await API.get('contest');
  setValue(contestDatas);
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
