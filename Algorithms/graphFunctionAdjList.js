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

function printGraph(graph) {
    console.log(graph);
}

function dfs(graph, vertex, visited = new Set()) {
    visited.add(vertex);
    console.log(vertex);
    for (let i = 0; i < graph[vertex].length; i++) {
        if (!visited.has(graph[vertex][i])) { //lưu ý không phải i
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
            console.log(vertex);
            visited.add(vertex);
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

console.log("BFS:");
bfs(graph, 0);