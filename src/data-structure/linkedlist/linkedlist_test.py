import unittest
from linkedlist import LinkedList


class TestLinkedList(unittest.TestCase):

    def test_index(self):
        l = LinkedList()
        l.insert_head(233)
        l.insert_head(245)
        l.insert_head(248)
        l.insert(289, 2)
        self.assertEqual(l.get(2), 289)
        self.assertEqual(l.get(0), 248)


if __name__ == '__main__':
    unittest.main()
