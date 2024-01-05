## useEffect

```javascript
useEffect(() => , [dependencies])
```

### `dependencies`[종속성]

종속성에는 void, [], [variable1, variable2, ...]
3가지 방법이 있다.

#### void(공백)

- 컴포넌트가 랜더링 될때에만 수행된다.
- 따라서 useState 등 컴포넌트를 재 랜더링이 수행되면 계속 호출되어 버그 및 무한루프가 발생할 수 있다.

#### [](빈 배열)

- 종속성이 없기 때문에 컴포넌트가 처음 한번 랜더링이 될 때만 수행된다.
- 이미 랜더링된 컴포넌트를 재 랜더링 할 때에는 수행되지 않는다.

#### [variable1, variable2, ...]

- 배열안의 변수들 중 하나라도 값이 변경되면 useEffect 함수가 재 수행 된다.

### CleanUP

```javascript
useEffect(() => {
    return () => {}
}, []);
```

반환값이 있는 함수를 useEffect 에 제공하면, 해당 함수는 컴포넌트가 종료될 때 또는 해당 useEffect 가 재 수행되기 전에 수행된다.
useEffect 가 최초 수행될 때에는 수행되지 않는다.

### useCallback()

```javascript
function App() {
    const handleClick = useCallback(() => {}, []);
}
```
    - 함수에 대한 Memozation 으로 원시값이 아닌 함수(객체) 의 변경이 없을 때 또는 의존성의 값이 변경되어 함수의 결과가 변경될 떄 사용된다.
    - React 는 컴포넌트가 랜더링 될 때 선언한 함수를 그 당시의 상태로 스냅샷을 저장하는데 상태제어를 통해 의존하는 상태값이 있고, 해당 상태가 변경 되었을 때만 새로운 함수의 스냅샷으로 교체 하는데 주로 사용된다.
    - useEffect 와 비슷한 구문으로 사용된다.
    - 변경되지 않는 이벤트 함수나 단순 상태값을 변경하는 함수에 사용하기 최적

