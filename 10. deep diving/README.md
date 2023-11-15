## 1. React Portal

HTML에 직접 표현하고자 하는 DOM Element 에 접근하여 React 컴포넌트를 랜더링 하는것.
ReactDom.createPortal([React Component], [html dom element] ) 함수 사용

## 2. 제어/제어되지 않는 컴포넌트

React 에서 제공하는 상태 관리 hook(useState) 를 사용하는 컴포넌트를 제어되는 컴포넌트, useRef 을 사용하여 직업 HTML DOM 의 상태를 관리하는 컴포넌트를 제어되지 않는 컴포넌트라 한다.

제어되지 않는 컴포넌트는 값이 변경 되더라도 React 컴포넌트를 재 랜더링 하지 않는다.
