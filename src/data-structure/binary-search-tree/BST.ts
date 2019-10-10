import BstNode from './BstNode';

class BST<T> {
    private count: number = 0;
    private root: BstNode<T>;

    constructor() {
        this.root = null;
    }

    public size(): number {
        return this.count;
    }

    public isEmpty(): boolean {
        return this.count === 0;
    }

    public insert(value: T): void {
        if (this.root === null) {
            this.root = new BstNode<T>(value);
        } else {
            this._insert(this.root, value);
        }
    }

    private _insert(node: BstNode<T>, value: T): void {
        if (node.value === value) {
            return;
        } else if (node.value > value) {
            this._insert(node.left, value);
        } else if (node.value < value) {
            this._insert(node.right, value);
        }
    }

}
