import unittest
from BST import BST


class TestBSTList(unittest.TestCase):

    def test_insert(self):
        bst = BST()
        bst.insert(123)
        bst.insert(233)
        bst.insert(23)
        bst.insert(89)
        self.assertEqual(bst.root.val, 123)
        self.assertAlmostEqual(bst.root.right.val, 233)
        self.assertAlmostEqual(bst.root.left.val, 23)
        self.assertAlmostEqual(bst.root.left.right.val, 89)

    def test_insert_noraml(self):
        bst = BST()
        bst.insert_normal(123)
        bst.insert_normal(233)
        bst.insert_normal(23)
        bst.insert_normal(89)
        self.assertEqual(bst.root.val, 123)
        self.assertAlmostEqual(bst.root.right.val, 233)
        self.assertAlmostEqual(bst.root.left.val, 23)
        self.assertAlmostEqual(bst.root.left.right.val, 89)


if __name__ == '__main__':
    unittest.main()
