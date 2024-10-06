
import  { useState } from "react"
import Create from "./Create"

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2>To Do List </h2>
            <Create />
            {
                todos.length == 0 ?
                    <div>
                        <h2>no Record Found</h2> </div>
                    :
                    todos.map((todo,i) => (
                        <div key={i}>
                            {todo}
                        </div>
                    ))
            }

        </div>
    )
}

export default Home
