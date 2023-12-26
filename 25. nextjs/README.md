## NEXTJS

- NEXTJS 경로상에 `ude` 문자열이 포함되어 있는 폴더가 있으면 `npm run dev` 시 에러가 발생한다.

1. Data Fetching

   - 일반적인 Component 가 아닌 router page 에서만 사용이 가능하다

   #### getStaticProps

   - Project Build 시 fetch 하는 방식
   - build 시 모든 데이터에 대하여 대상 Path 를 생성해야 하기 때문에 그에 대한 path 검색도 이루어 져야 한다
   - `revalidate` 옵션을 사용하여 주기적으로 build 결과를 가져올 수 있다

   #### getStaticPaths

   - `getStaticPaths` 함수를 이용하여 동적 URL Path 검색을 할 수 있다

   #### getServerSideProps

   - 페이지 요청이 있을 때에 fetch 하는 방식

2. API

   - pages 내에 api 폴더 내에 url 주소로 `*.js` 파일을 생성하면 Nextjs 에서 자동으로 API 로 등록된다
