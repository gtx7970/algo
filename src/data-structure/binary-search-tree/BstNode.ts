export default class BstNode<T> {
    public value: T;
    public right: BstNode<T>;
    public left: BstNode<T>;

    constructor(value: T) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
