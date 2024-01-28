## TanStack

#### [useQuery](https://tanstack.com/query/latest/docs/react/reference/useQuery)

- 데이터 추출을 하기위해 사용

1. Options
   - queryKey 값을 key 구분값으로, queryFn 로 반환되는 결과값의 데이터를 캐쉬값에 저장한다. 같은 queryKey 값의 query 에 대하여 결과를 재 사용 하게 된다.
   - staleTime: queryFn 으로 반환되는 데이터의 유효 시간을 설정한다. 설정 시간이 넘어가면 자동으로 queryFn 을 수행한다.
   - gcTime: 캐쉬에 저장되는 시간을 설정한다. 설정 시간이 넘어가면 캐쉬에 있는 데이터는 삭제됨으로 queryKey 구분값의 Query 를 재 수행하게 된다.

2. Returns

    - data: query 에 대한 결과값
    - isLoading: status 의 한 종류 ture / false
    - isPending: status 의 한 종류 ture / false
    - isError: status 의 한 종류 ture / false
    - error: error 에 대한 정보가 들어있다

#### [useMutation](https://tanstack.com/query/latest/docs/react/reference/useMutation)

- 데이터의 변환(등록, 수정, 삭제)를 하기 위해 사용

1. Options
    - mutationFn: 데이터 변환에 관련된 함수 명을 입력한다.
    - onSuccess: 변환이 성공시 수행할 함수
    - onMutate: 변환이 시작되기 전 수행되는 함수
    - onError: 변환시 에러가 발생되었을 때 수행되는 함수
    - onSettled: 모든 작업이 종료 되었을 때 수행되는 함수

2. Returns

    - mutate: 변환이 수행되는 함수. `mutationFn` 을 수행하는 트리거
    - isLoading: status 의 한 종류 ture / false
    - isPending: status 의 한 종류 ture / false
    - isError: status 의 한 종류 ture / false
    - error: error 에 대한 정보가 들어있다