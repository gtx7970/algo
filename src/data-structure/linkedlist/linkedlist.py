from node import LinkedListNode


class LinkedList:
    dummy_head = None
    size = 0

    def __init__(self):
        self.dummy_head = LinkedListNode(None)

    def insert_head(self, val):
        self.insert(val, 0)

    # 3 -> 9 -> 43 -> 25
    # find previous node
    def insert(self, val, index):
        pre = self.dummy_head
        for i in range(index):
            pre = pre.next
        node = LinkedListNode(val)
        target = pre.next
        pre.next = node
        node.next = target
        self.size += 1

    '''
    insert node use recursion
    '''

    def insert_recursion(self, val, index):
        pass

    def get(self, index):
        cur = self.dummy_head.next
        for i in range(index):
            cur = cur.next
        return cur.val

    def set(self, val, index):
        cur = self.dummy_head.next
        for i in range(index):
            cur = cur.next
        cur.val = val

    def remove(self, val, index):
        pre = self.dummy_head
        for i in range(index - 1):
            pre = pre.next

        deleteNode = pre.next
        pre.next = deleteNode.next
        self.size -= 1

    def __repr__(self):
        pass
