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

function printGraph(graph) {
    console.log(graph);
}

function dfs(graph, vertex, visited = new Array(graph.length).fill(true)) {
    visited[vertex] = false;
    console.log(vertex);
    for (let i = 0; i < graph[vertex].length; i++) {
        if (graph[vertex][i] == 1 && visited[i]) {
            dfs(graph, i, visited);
        }
    }
}

function bfs(graph, start) {
    const queue = [start];
    const visited = new Array(graph.length).fill(true);
    while (queue.length > 0) {
        const vertex = queue.shift();
        if (visited[vertex]) { //tránh bạn chung thăm lại nhiều lần
            console.log(vertex);
            visited[vertex] = false;
            for (let i = 0; i < graph[vertex].length; i++) {
                if (graph[vertex][i] == 1 && visited[i]) {
                    queue.push(i);
                }
            }
        }
    }
}

const graph = createGraph(3);
addEdge(graph, 0, 1, 1);
addEdge(graph, 0, 2, 100);
addEdge(graph, 1, 2, 1);
printGraph(graph);

console.log("DFS:");
dfs(graph, 0);

console.log("BFS:");
bfs(graph, 0);