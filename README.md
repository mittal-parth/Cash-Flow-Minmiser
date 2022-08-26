# Cash Flow Minimiser

This is a program that allows users to split expenses with friends or colleagues. If a group needs to share the cost of a particular bill, the Cash Flow Minimiser will make sure that each person who paid money, gets reimbursed with the correct amount. This is also done using the minimum number of transactions. 

## Demo

https://minimise-cash-flow.netlify.app/

## Video

https://user-images.githubusercontent.com/76661350/151113470-62df1428-0c25-4019-a5ee-25353530752c.mp4


## Installation

Clone the repository <br/>
`git clone https://github.com/mittal-parth/Cash-Flow-Minmiser` <br/>
`cd Cash-Flow-Minmiser`

Check package.json file and ensure scripts are notated as below:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```


Delete the node_modules folder and any 'lock' files such as 
yarn.lock or package-lock.json if present.

Install required packages<br/>
`npm install`

Run the server<br/>
`npm start`

## How does it work?
Approach to solving this problem:
First, we take in all the transactions and exchanges that have happened among the group of people. We use a function which is used to calculate every individual's net balance. 

Based on their net balances, we can segregate the people into 2 categories - 
<ul>
<li>those under credit </li>
<li>those under debit</li>
</ul>


A person is said to come under <i>credit</i> if his/ her net balance is <i>greater than</i> 0. This means that this person has to get his money back. 
Likewise, a person is said to come under <i>debit</i> if his/ her balance is <i>lesser than</i> 0. This means this person owes money to someone else. 
(If the net balance of an individual is 0, that means that he/ she need not give nor receive any money and they have been <i>settled</i>. 
Such people will no longer be taken into consideration for further transaction settlements). 


<i>Eg: If Tarun pays ₹100 to Yash, then we can say that Tarun has to be reimbursed ₹100 which means his net balance is 100 and he is under credit. 
Likewise, Yash who borrowed money has to pay Tarun back ₹100 as he is in debt. So, Yash has a net balance of -100. Once this has been settled, both their balances become 0. </i>

Next, from among the people who are in debit, we pick the person with the <b>largest debit.</b> 
Then, among the people who are under credit, pick the person with the <b>largest credit. </b>
We start off by settling these 2 values. Once they have been settled, we take the person with the next largest credit and the next largest debit and settle these 2. 
This process continues until every person has been settled.

This can be achieved using a <b>Max Heap.</b>  
This is the solution we follow to implement our Cash Flow Minimiser.
