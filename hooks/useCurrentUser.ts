import useSwr from 'swr'

import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher);
    console.log(data);
    return {
      data,
      error,
      isLoading,
      mutate,
    }
  };
  

export default useCurrentUser;