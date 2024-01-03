## Ref

- React 에서 제공하는 상태 관리 hook(useState) 를 사용하는 컴포넌트를 제어되는 컴포넌트, useRef 을 사용하여 직업 HTML DOM 의 상태를 관리하는 컴포넌트를 제어되지 않는 컴포넌트라 한다.
- 제어되지 않는 컴포넌트는 값이 변경 되더라도 React 컴포넌트를 재 랜더링 하지 않는다. 또한 컴포넌트가 재 랜더링 되더라도 useRef 의 참조값은 초기화 되지 않는다.
- `Reference` 를 직접 접근하는 명령형 코드는 피해야 한다.

#### Ref 전달

- 상위 컴포넌트에서 하위 컴포넌트로의 Reference 맵핑
- 하위 컴포넌트에서 상위 컴포넌트로의 Reference 함수 및 데이터 맵핑

```
// Parent.js
const parentComponent = () => {
    const childRef = createRef();

    childRef.current.focus();

    return <div>
        <Child ref={childRef} />
    </div>
}

// Child.js
const Child = React.forwardRef((props, ref) => {
    const ref = useRef();

    useImperativeHandle(ref, () => {
        return {
            focus: () => ref.current.focus(),
        };
    });

    <Input ref={ref} />
});
```

#### useImperativeHandle
- ref 로 참조된 component 내부에서 사용자가 정의한 함수나 변수를 공유하기 위하여 사용한다.