function createGraph(numVertices) {
  const adjList = new Array(numVertices);
  for (let i = 0; i < numVertices; i++) {
    adjList[i] = [];
  }
  return adjList;
}

function addEdge(graph, v1, v2) {
  graph[v1].push(v2);
  graph[v2].push(v1);
}

function removeEdge(graph, v1, v2) {
  const index1 = graph[v1].indexOf(v2);
  if (index1 > -1) {
    graph[v1].splice(index1, 1);
  }
  const index2 = graph[v2].indexOf(v1);
  if (index2 > -1) {
    graph[v2].splice(index2, 1);
  }
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
        if (!visited.has(graph[vertex][i])) {
          stack.push(graph[vertex][i]);
        }
      }
    }
  }
}

function dfsRecursion(graph, vertex, visited = new Set()) {
  visited.add(vertex);
  console.log(vertex);
  for (let i = 0; i < graph[vertex].length; i++) {
    if (!visited.has(graph[vertex][i])) {
      dfs(graph, graph[vertex][i], visited);
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
        if (!visited.has(graph[vertex][i])) {
          queue.push(graph[vertex][i]);
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
