class MinHeap {
  minHeap: number[]

  constructor() {
    this.minHeap = [-1]
  }

  add(element: number) {
    this.minHeap.push(element)

    let index = this.minHeap.length
    let parent = Math.floor(index / 2)

    while (this.minHeap[index] < this.minHeap[parent] && index > 1) {
      [this.minHeap[index], this.minHeap[parent]] = [this.minHeap[parent], this.minHeap[index]]
      index = parent
      parent = Math.floor(parent / 2)
    }
  }

  pop() {
    let removeElement = this.minHeap[1]
    this.minHeap[1] = this.minHeap[this.minHeap.length]
    this.minHeap.splice(this.minHeap.length - 1, 1)

    let index = 1
    while (index <= this.minHeap.length / 2) {
      let left = index * 2;
      // the right child of the deleted element
      let right = (index * 2) + 1;

      if (this.minHeap[index] > this.minHeap[left] || this.minHeap[index] > this.minHeap[right]) {
        if (minHeap[left] < minHeap[right]) {
          []
          index = left;
        } else {
            // maxHeap[left] >= maxHeap[right]
            int temp = minHeap[right];
          minHeap[right] = minHeap[index];
          minHeap[index] = temp;
          index = right;
        }
      } else {
        break;
      }
    }
  }


}
