## Deploy

#### lazy
- React Project 배포시, SPA framework 이기 때문에, 사용자가 보이는 화면 외에 Component 및 연관 하위 Component 가 한번에 사용자가 다운받기 때문에 파일이 커지고 속도 저하가 생길 수가 있다.
- React 에서 제공되는 lazy API 및 dynamic import 를 사용하여 필요할 떄에만 해당 모듈(함수)을 다운로드 할 수 있게 해준다.

```javascript
const page = lazy(() => import("./components/document/index.js"));
```

#### deploy
- firebase hosting 를 사용하여 SPA 배포.
- github pages 와는 다르게 Route 주소를 직접 입력해도 접근이 가능하다.
- 한 프로젝트에 database, hosting 서비스가 있기에 개인 프로젝트로 사용하기에 용이하다.