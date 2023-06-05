class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.adjMatrix = new Array(numVertices);
      for (let i = 0; i < numVertices; i++) {
        this.adjMatrix[i] = new Array(numVertices).fill(0);
      }
    }
  
    addEdge(v1, v2) {
      this.adjMatrix[v1][v2] = 1;
      this.adjMatrix[v2][v1] = 1;
    }
  
    removeEdge(v1, v2) {
      this.adjMatrix[v1][v2] = 0;
      this.adjMatrix[v2][v1] = 0;
    }
  
    print() {
      console.log(this.adjMatrix);
    }

    dfs(start) {
        const stack = [start];
        const visited = new Set();
        while (stack.length > 0) {
          const vertex = stack.pop();
          if (!visited.has(vertex)) {
            visited.add(vertex);
            console.log(vertex);
            for (let i = this.numVertices - 1; i >= 0; i--) {
              if (this.adjMatrix[vertex][i] === 1 && !visited.has(i)) {
                stack.push(i);
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
      for (let i = 0; i < this.numVertices; i++) {
        if (this.adjMatrix[vertex][i] === 1 && !visited.has(i)) {
          this.dfsHelper(i, visited);
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
          for (let i = 0; i < this.numVertices; i++) {
            if (this.adjMatrix[vertex][i] === 1 && !visited.has(i)) {
              queue.push(i);
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
  