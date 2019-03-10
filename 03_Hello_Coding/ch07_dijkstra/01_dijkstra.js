const graph = {};

// start point 
graph.start = {};

// neighbor node,  weight add
graph.start.a = 6;
graph.start.b = 2;

// Object.keys(obj), method to get object's key  
graph.a = {fin : 1};
graph.b = { a : 3, fin : 5};
graph.fin = {};

// hash table to add each node's cost
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

//has table to represent node's parents
const parents = {};
parents.a = "start"
parents.b = "start"
parents.fin = null;

//Array to record process history
const processed = [];

//delcare findLowestCostNode function
function findLowestCostNode(costs){
    let lowestCost = Infinity;
    let lowestCostNode = null;
    for( let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && !(processed.includes(node))) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}


// prcess start
let node = findLowestCostNode(costs);

while(node) {
    let cost = costs[node], neighbors = graph[node];
    for( let n in neighbors) {
        let newCost = cost + neighbors[n];
        if (costs[n] > newCost) {
            costs[n] = newCost;
            parents[n] = node;
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
}