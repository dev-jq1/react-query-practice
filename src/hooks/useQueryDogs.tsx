import { useQueries } from '@tanstack/react-query';

const placeholderData = {
  message: []
};

const useQueryDogs = (queryKeys: string[]) => {
  //useQueries : 2개 이상의 API Fetching할 때
  //useQuery : 데이터를 GET해오기 위한 함수
  //useQuery([unique key], 비동기 함수(api 호출 함수 => promise 객체))
  const fetcher = async (breed: string) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
    const data = await response.json();

    return data;
  };

  const results = useQueries({
    queries: queryKeys.map((key) => {
      return {
        queryKey: [key],
        queryFn: () => fetcher(key)
      };
    })
  });

  const getData = () => {
    return results.map(({ data }) => {
      return data?.message;
    });
  };

  return { getData };
};

export default useQueryDogs;
