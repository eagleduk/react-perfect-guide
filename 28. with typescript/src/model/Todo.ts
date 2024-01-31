class Todo {
    id: number;
    text: string;
    constructor(t: string) {
        this.text = t;
        this.id = Date.now();
    }
}

export default Todo;