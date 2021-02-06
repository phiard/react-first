import React from 'react'
import TodoItem from "./TodoItem"

export default function Todos() {
    return (
        <div className="todos">
            <div className="todo-list"></div>
            <div className="todo-input">
                <input type="text"></input>
            </div>
        </div>
    )
}
