function createGraph(numVertices) {
    const adjMatrix = new Array(numVertices);
    for (let i = 0; i < numVertices; i++) {
        adjMatrix[i] = new Array(numVertices).fill(Number.MAX_SAFE_INTEGER);
        adjMatrix[i][i] = 0;
    }
    return adjMatrix;
}

function addEdge(graph, v1, v2, weight) {
    graph[v1][v2] = weight;
    graph[v2][v1] = weight;
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

function floyd(graph) {
    const n = graph.length;
    const dp = [...graph];
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dp[i][j] = Math.min( dp[i][j], dp[i][k] + dp[k][j]);
            }
        }
    }
    return dp;
}

const graph = createGraph(3);
addEdge(graph, 0, 1, 1);
addEdge(graph, 0, 2, 100);
addEdge(graph, 1, 2, 1);

console.log("Floyd:");
const dp = floyd(graph);
console.log(dp);
console.log(dp[0][2]);