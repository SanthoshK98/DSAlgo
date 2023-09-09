class Graph {
    constructor(){
        this.adjacenyList = {}
    }

    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacenyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacenyList[vertex2]){
            this.addVertex(vertex2)
        }
        if(this.hasEdge(vertex2,vertex1)){
            return
        }
        this.adjacenyList[vertex1].add(vertex2)
    }

    display(){
        for(let vertex in this.adjacenyList) {
            console.log(`${vertex}-> ${[...this.adjacenyList[vertex]]}`)
        }
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjacenyList[vertex1] || !this.adjacenyList[vertex2]){
            return false
        }
        return (
            this.adjacenyList[vertex1].has(vertex2)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacenyList[vertex1].delete(vertex2)
    }

    deleteVertex(vertex){
        if(this.adjacenyList[vertex]){
            for(let vert in this.adjacenyList){
                if(this.adjacenyList[vert].has(vertex)){
                    this.adjacenyList[vert].delete(vertex)
                    break
                }
            }
            delete this.adjacenyList[vertex]
        }
    }
}

const graph = new Graph()
graph.addVertex("CEO")
graph.addEdge("CEO","Director India")
graph.addEdge("CEO","Director UK")
graph.addEdge("CEO","Director Poland")
graph.addEdge("CEO","Director UK")
graph.addEdge("Director India","Manager 1")
graph.addEdge("Director India","CEO")
// graph.deleteVertex("Director India")
graph.display()
console.log(graph.hasEdge("CEO","Director India"))
console.log(graph.hasEdge("Director India","CEO"))