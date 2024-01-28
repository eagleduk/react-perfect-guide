## Redux

- redux 는 상태 관리 라이브러리이다.
- react 전용이 아니라 일반 JS, 또는 다른 언어에서도 사용이 가능하다.
- react *context* 와 비슷하게 구현한다.

1. reducer 함수 구현(`./src/store/index.js`)
2. Provider Component 로 상태를 사용하고자 하는 Component 를 감싼다(`./src/index.js`)
3. useSelecter, useStore 또는 useDispatch Custom Hook을 사용하여 현재 상태 및 상태 변경 reducer 를 호출한다(`./src/components/Counter.js`)

#### Redux tool-kit

- redux 상태관리가 확장될 수록 관리가 힘들어 지는 것을 방지하기 위한 툴킷
- 상태를 관리하고 싶은 모듈들을 각 파일로 관리할 수 있다.
- 여러가지 상태를 합쳐 하나의 거대한 상태 객체로 취급할 수 있도록 도와준다.