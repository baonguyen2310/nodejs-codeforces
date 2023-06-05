function createGraph(numVertices) {
  const adjMatrix = new Array(numVertices);
  for (let i = 0; i < numVertices; i++) {
    adjMatrix[i] = new Array(numVertices).fill(0);
  }
  return adjMatrix;
}

function addEdge(graph, v1, v2) {
  graph[v1][v2] = 1;
  graph[v2][v1] = 1;
}

function removeEdge(graph, v1, v2) {
  graph[v1][v2] = 0;
  graph[v2][v1] = 0;
}

function printGraph(graph) {
  console.log(graph);
}

function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const vertex = stack.pop();
    if (!visited.has(vertex)) {
      visited.add(vertex);
      console.log(vertex);
      for (let i = 0; i < graph[vertex].length; i++) {
        if (graph[vertex][i] === 1 && !visited.has(i)) {
          stack.push(i);
        }
      }
    }
  }
}

function dfsRecursion(graph, vertex, visited = new Set()) {
  visited.add(vertex);
  console.log(vertex);
  for (let i = 0; i < graph[vertex].length; i++) {
    if (graph[vertex][i] === 1 && !visited.has(i)) {
      dfs(graph, i, visited);
    }
  }
}

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  while (queue.length > 0) {
    const vertex = queue.shift();
    if (!visited.has(vertex)) {
      visited.add(vertex);
      console.log(vertex);
      for (let i = 0; i < graph[vertex].length; i++) {
        if (graph[vertex][i] === 1 && !visited.has(i)) {
          queue.push(i);
        }
      }
    }
  }
}

const graph = createGraph(5);
addEdge(graph, 0, 1);
addEdge(graph, 0, 2);
addEdge(graph, 1, 3);
addEdge(graph, 2, 4);
printGraph(graph);

console.log("DFS:");
dfs(graph, 0);

console.log("DFS Recursion:");
dfsRecursion(graph, 0);

console.log("BFS:");
bfs(graph, 0);
