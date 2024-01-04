## Context

- React App 에서 Global 한 상태를 관리하고 싶을 때 사용
- State 가 자주 변경 되는 데이터 관리에는 적합하지 않다(=> redux)

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
