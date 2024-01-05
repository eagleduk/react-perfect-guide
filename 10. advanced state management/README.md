## Context

- React App 에서 Global 한 상태를 관리하고 싶을 때 사용
- State 가 자주 변경 되는 데이터 관리에는 적합하지 않다(=> redux)

```jsx
// Context 생성
const context = React.createContext([defineContext]);

// Context 를 사용하고자 하는 Component 할당
<context.Provider value={[initValue]}>
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

## useReducer

```javascript
function customReducer(state, action) {
    if(action.type === "A") {}
    if(action.type === "B") {}
    return state;
};

function App() {
    const [state, dispatch] = useReducer(customReducer, initialArg, init?)
}
```

다른 state 를 기반으로 state 를 관리 하고자 할 떄 주로 사용.
서로 다른 state 에 대하여 항상 최신 데이터라는 보장이 없다.

