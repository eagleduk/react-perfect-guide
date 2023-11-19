## useEffect

```
useEffect(() => , [dependencies])
```

### 종속성

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

```
useEffect(() => {
    return () => {}
}, []);
```

반환값이 있는 함수를 useEffect 에 제공하면, 해당 함수는 컴포넌트가 종료될 때 또는 해당 useEffect 가 재 수행되기 전에 수행된다.
useEffect 가 최초 수행될 때에는 수행되지 않는다.

## useReducer

```
const reducer = (state, action) => {};

function App() {
    const [state, dispatch] = useReducer(reducer, initialArg, init?)
}
```

다른 state 를 기반으로 state 를 관리 하고자 할 떄 주로 사용.
서로 다른 state 에 대하여 항상 최신 데이터라는 보장이 없다.

## Context

React App 에서 Global 한 상태를 관리하고 싶을 때 사용

```
// Context 생성
const context = React.createContext([initValue]);

// Context 를 사용하고자 하는 Component 할당
<context.Provider value={[dyamicValue]}>
    <App />
</context.Provider>

// Context 사용 방법 1.
<context.Consumer>
    {
        () => {
            return <div></div>
        }
    }
</context.Consumer>

// Context 사용 밥법 2.
const ctx = useContext(context);
```
