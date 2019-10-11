from BSTNode import BSTNode


class BST:

    def __init__(self):
        self.root = None
        self.size = 0

    '''
    insert use recusrion
    '''

    def insert(self, val):
        if self.root is None:
            self.root = BSTNode(val)
            self.size += 1
        else:
            self._insert(self.root, val)

    def _insert(self, node, val):
        if node.val == val:
            return
        elif node.val < val and node.right is None:
            node.right = BSTNode(val)
            self.size += 1
            return
        elif node.val > val and node.left is None:
            node.left = BSTNode(val)
            self.size += 1
            return

        if node.val < val:
            self._insert(node.right, val)
        else:
            self._insert(node.left, val)

    '''
    insert not use recursion
    '''

    def insert_normal(self, val):
        if self.root is None:
            self.root = BSTNode(val)
            self.size += 1
            return

        cur = self.root
        pre = None

        while cur:
            if cur.val == val:
                return

            pre = cur
            if cur.val < val:
                cur = cur.right
            elif cur.val > val:
                cur = cur.left

        if pre.val < val:
            pre.right = BSTNode(val)
            self.size += 1
        elif pre.val > val:
            pre.left = BSTNode(val)
            self.size += 1
