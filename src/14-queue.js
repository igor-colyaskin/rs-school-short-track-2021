const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(y) {
    if (y) {
      this.value = y;
      this.size = 1;
    } else {
      this.value = null;
      this.size = 0;
    }
    this.next = null;
  }

  getSize() {
    return this.size;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.value === null) {
      this.value = node.value;
    } else {
      let currentNode = this;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }

  dequeue() {
    const valueOne = this.value;
    if (this.size === 1) {
      this.size = 0;
      this.value = null;
      return valueOne;
    }
    const valueTwo = this.next.value;
    this.value = valueTwo;
    this.next = this.next.next;
    this.size--;
    return valueOne;
  }
}

module.exports = Queue;
