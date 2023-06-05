class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Array(numVertices);
    for (let i = 0; i < numVertices; i++) {
      this.adjList[i] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    const index1 = this.adjList[v1].indexOf(v2);
    if (index1 > -1) {
      this.adjList[v1].splice(index1, 1);
    }
    const index2 = this.adjList[v2].indexOf(v1);
    if (index2 > -1) {
      this.adjList[v2].splice(index2, 1);
    }
  }

  print() {
    console.log(this.adjList);
  }

  dfs(start) {
    const stack = [start];
    const visited = new Set();
    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
        for (let i = 0; i < this.adjList[vertex].length; i++) {
          if (!visited.has(this.adjList[vertex][i])) {
            stack.push(this.adjList[vertex][i]);
          }
        }
      }
    }
  }

  dfsRecursion(start) {
    const visited = new Set();
    this.dfsHelper(start, visited);
  }

  dfsHelper(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);
    for (let i = 0; i < this.adjList[vertex].length; i++) {
      if (!visited.has(this.adjList[vertex][i])) {
        this.dfsHelper(this.adjList[vertex][i], visited);
      }
    }
  }

  bfs(start) {
    const queue = [start];
    const visited = new Set();
    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
        for (let i = 0; i < this.adjList[vertex].length; i++) {
          if (!visited.has(this.adjList[vertex][i])) {
            queue.push(this.adjList[vertex][i]);
          }
        }
      }
    }
  }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.print();

console.log("DFS:");
graph.dfs(0);

console.log("DFS Recursion:");
graph.dfsRecursion(0);

console.log("BFS:");
graph.bfs(0);
