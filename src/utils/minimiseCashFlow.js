import Expense from "../classes/expense";

// function to maintain heap property while inserting an element
function upheapify(heap, idx) {
  // heap = [{first: net_value, second: person}]

	// already at the root node, cant go higher
  if (idx === 0) return;
  var parent_idx = Math.floor((idx - 1) / 2);

  if (heap[parent_idx].first < heap[idx].first) {

		// swap the object
    var temp = heap[parent_idx];
    heap[parent_idx] = heap[idx];
    heap[idx] = temp;

		// recursively continue
    upheapify(heap, parent_idx);
  } else {
    return;
  }
}

// function to maintain heap property while deleting an element
function downheapify(heap, idx) {
  var left_child_idx = 2 * idx + 1;
  var right_child_idx = 2 * idx + 2;

	// leaf nodes
  if (left_child_idx >= heap.length && right_child_idx >= heap.length) return;

	// check the largest among the root, left child and right child
  var largest = idx;
  if (left_child_idx < heap.length && heap[left_child_idx].first > heap[largest].first) {
    largest = left_child_idx;
  }
  if (right_child_idx < heap.length && heap[right_child_idx].first > heap[largest].first) {
    largest = right_child_idx;
  }

	// no more changes required - heap properties are maintained
  if (largest === idx) return;

  var temp = heap[largest];
  heap[largest] = heap[idx];
  heap[idx] = temp;

	// recursively continue
  downheapify(heap, largest);
}

// function to insert an element into a heap
// while maintaining its properties
function push_heap(heap, key, val) {
  var ob = { first: key, second: val };
  heap.push(ob);
  upheapify(heap, heap.length - 1);
}

// function to remove an element from the heap
// while maintaing its properties
function pop_heap(heap) {

	// edge case - empty heap
  if (heap.length === 0) return 0;

  var i = heap.length - 1;

	// since its a max heap we always remove the
	// element from top and replace with last element in
	// array representation of complete binary tree
  var temp = heap[0];
  heap[0] = heap[i];
  heap[i] = temp;

	// remove the last element in the array representation of 
	// complete binary tree
  heap.pop();

	// maintain heap properties
  downheapify(heap, 0);
}

// obtain the top most element of the heap
function heap_top(heap) {
  if (heap.length === 0) {
    return;
  }
  return heap[0];
}

// function to minimise cash flow
// transactions is an array of expense class objects
export function minimiseCashFlow(transactions) {
	// {"name" : amt}
  var net_balance = {};
  for (var i = 0; i < transactions.length; i++) {
    var e = transactions[i]; // e is an object of expense class

    // person1 is the payer so under a credit
    if (e.person1 in net_balance) {
			// appends the amount for person 1
      net_balance[e.person1] += e.amount;
    } else {
			net_balance[e.person1] = e.amount;
    }
		
		// person2 is the payee so under a debit
    if (e.person2 in net_balance) {
			// appends the amount for person 2 
			// negative since person2 is under debit
      net_balance[e.person2] -= e.amount;
    } else {
      net_balance[e.person2] = -e.amount;
    }
  }

  var positive = []; // heap of credit holders
	
	/* positive = [
		{100:"parth"}, 
		{200: "abhinav"},
		{300: "xyz"}
	] */
	
  var negative = []; // heap of debit holders

  for (const person in net_balance) {
    if (net_balance[person] > 0) {

			// insert into credit heap
      push_heap(positive, net_balance[person], person);
    } else {

			// insert into debit heap
      push_heap(negative, -1 * net_balance[person], person);
    }
  }

	// array of simplified settlements
  var result = []; 

  while (positive.length > 0) {

		// obtain the max credit and debit (top of heaps)
    var p1 = heap_top(positive);
    var p2 = heap_top(negative);

    pop_heap(positive);
    pop_heap(negative);

		// make a new simplified expense
    let exp = new Expense(p2.second, p1.second, Math.min(p1.first, p2.first));
    result.push(exp);

		// push the residual unsettled amount (if any)

    if (p1.first > p2.first) {

			// p1 is still under credit
      push_heap(positive, p1.first - p2.first, p1.second);
    } else if (p1.first < p2.first) {

			// p2 is still under debit
      push_heap(negative, p2.first - p1.first, p2.second);
    }
  }

  return result;
}
