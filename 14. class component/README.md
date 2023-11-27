## Class Component Render

```
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (<h1>Hellow World!</h1>)
    }
}
```

## Class Component Event Handling

```
class App extends Component {
    constructor() {
        super();
    }

    clickEventHandler() {

    }

    render() {
        return (<button onClick={this.clickEventHandler.bind(this)}>)
    }
}
```

## Class Component State

```
class App extends Component {
    constructor() {
        super();
        this.state = {
            [key]: [value]
        }
    }

    inputEventHandler(event) {
        this.setState((prevState) => ({
            [key]: event.target.value,
        }));
    }

    render() {
        return (<input type="text" onChange={this.inputEventHandler.bind(this)}>)
    }
}
```

## Class Component LifeCycle

1. **componentDidMount**
   - `useEffect(() => {} ,[])` 와 동일. Component 가 **처음 랜더링 될 때에만** 실행

2. **componentDidUpdate**
    - `useEffect(() => {}, [n1,n2,...,n])` 와 동일. Component **state 값이 변경될 떄** 실행
    - 내부에서 원하는 상태에 따라 분기 필요

3. **componentWillUnmount**
    - `useEffect(() => { return () => {} }, [])` 와 동일. Component 가 **리랜더링 또는 삭제될 떄** 실행


## class Component Context

```
class App extends Component {
    static contextType = <ContextComponent>;

    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.context);
    }

    render() {
    }
}
```