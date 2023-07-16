// Linked Lists

class LinkedList{
  constructor(){
    this.head = null // First element of the List
    this.tail = null // Last element of the List
  }

  append(value){
    const newNode = { value: value, next: null }
      if(this.tail){
        this.tail.next = newNode;
      }
      this.tail = newNode;
  }
}

const linkedList1 = new LinkedList();