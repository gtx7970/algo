class BSTNode:
    '''
    for every node
    left node < parent
    right node > parent
    '''

    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
