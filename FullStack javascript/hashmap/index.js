const { HashMap } = require('./hashMap');
const { HashSet } = require('./hashSet');

// Example usage of HashMap
const myHashMap = new HashMap();
myHashMap.set('apple', 'green');
myHashMap.set('banana', 'yellow');
console.log(myHashMap.get('apple')); // green
console.log(myHashMap.length()); // 2

// Example usage of HashSet (optional)
const myHashSet = new HashSet();
myHashSet.add('apple');
myHashSet.add('banana');
console.log(myHashSet.has('apple')); // true
console.log(myHashSet.size()); // 2
