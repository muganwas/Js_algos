class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vName) {
        this.adjacencyList[vName] = [];
        return this.adjacencyList;
    }
    addEdge(v_1, v_2) {
        this.adjacencyList[v_1].push(v_2);
        this.adjacencyList[v_2].push(v_1);
        return this.adjacencyList;
    }
    removeEdge(v_1, v_2) {
        this.adjacencyList[v_1].splice(this.adjacencyList[v_1].indexOf(v_2), 1);
        this.adjacencyList[v_2].splice(this.adjacencyList[v_2].indexOf(v_1), 1);
        return this.adjacencyList;
    }
    removeVertex(vName) {
        Object.keys(this.adjacencyList).forEach(key => {
            if (key !== vName && this.adjacencyList[key].includes(vName)) this.removeEdge(key, vName);
        });
        delete this.adjacencyList[vName];
        return this.adjacencyList;
    }
    dftr(edge) {
        if (!edge) return null;
        const adjacencyList = this.adjacencyList;
        let visited = [edge];
        (function visitEdge(edge) {
            const edgeArr = adjacencyList[edge];
            if (!edgeArr) return [];
            let pos = 0;
            while (edgeArr && pos < edgeArr.length) {
                const edgePos = edgeArr[pos];
                pos++;
                if (edgePos && !visited.includes(edgePos)) {
                    visited.push(edgePos);
                    visitEdge(edgePos);
                }
            }
        })(edge);
        return visited;
    }

    dfti(edge) {
        if (!edge) return null;
        const visited = [];
        const toCheck = [edge];
        while (toCheck.length > 0) {
            const v = toCheck.pop();
            visited.push(v);
            const edgeArr = this.adjacencyList[v];
            edgeArr.forEach(nV => {
                if (!visited.includes(nV) && !toCheck.includes(nV)) toCheck.push(nV);
            });
        }
        return visited;
    }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("E", "F");
//console.log(myGraph.dftr("A"));
console.log(myGraph.dfti("A"));
