## Class Component Render
```
class App extends Component {
    constructor() {

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

    }

    clickEventHandler() {

    }

    render() {
        return (<button onClick={this.clickEventHandler.bind(this)}>)
    }
}
```