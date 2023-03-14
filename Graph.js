// // 1. Undirected
// // 2. Directed
// // 3. weighted graph

// // =================================================
// // Undirected graph
// // one node - one node

// // =================================================
// // Directed graph
// // A -> B

// // ================================================
// // Weighted graph ( undirected, directed )
// //    w
// // a --- b

// // ==================================================
// 1. Graph storage ( done )
// 2. Graph traversal ()
// 0 2
// 0 1
// 0 3
// 2 4

//     1
//     /
//  0---- 2--- 4
//     \
//     3

//===========================================================
// Adjacency Matrix
// x 0 1 2 3 4
// 0   T T T
// 1
// 2 F F F F T
// 3
// 4

// Adjacency List
// 0 -> [1, 2, 3]
// 1 -> [0]
// 2 -> [0, 4]
// 3 -> [0]
// 4 -> [2]
//===============================================================


// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }


//======================================Graph Class==================================== 

//======================================Undirected Graph===========================

/*=======================Undirected Graph Class============================*/
class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
        this.vertexCount = 0;
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []; // creating new array
            this.vertexCount++;
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    print() {
        console.log(this.adjacencyList);
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (visited[neighbor] === false) {
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);


            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}
let UndirGraph= new UndirectedGraph()
UndirGraph.addVertex(0)
UndirGraph.addVertex(1)
UndirGraph.addVertex(2)
UndirGraph.addVertex(3)
UndirGraph.addVertex(4)

UndirGraph.addEdge(0,1);
UndirGraph.addEdge(0,2)
UndirGraph.addEdge(0,3)
UndirGraph.addEdge(2,4)

UndirGraph.print();

console.log(UndirGraph.depthFirstRecursive())
console.log(UndirGraph)
/*==========================================================================*/

/*=======================Directed Graph Class===============================*/
class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
        this.vertexCount = 0;
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.vertexCount++;
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        // this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        // this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        //     v => v !== vertex1
        // );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }

    print() {
        console.log(this.adjacencyList);
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);


            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


/*================================Dijkstra Algorithm===================================*/

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

/*================================Dijkstra Algorithm===================================*/


function solution(/*params*/) {
    //solution
    let graph = new DirectedGraph();

    let vertices = parseInt(readLine());
    for (let i = 0; i < vertices; i++) {
        graph.addVertex(i);
    }

    let edges = parseInt(readLine());
    for (let i = 0; i < edges; i++) {
        let [x, y] = readLine().replace('\r', ' ').split(' ');
        // console.log(x, y);
        graph.addEdge(x, y);
    }

    graph.print();
    // let ans = graph.breadthFirst('0');
    // console.log("BFS :", ans);

    // let anotherans = graph.depthFirstRecursive('0');
    // console.log("DFS :", anotherans);

}


// function main() {
//     let t = parseInt(readLine());
//     while (t > 0) {
//         solution();
//         t--;
//     }
// }