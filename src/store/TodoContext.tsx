import { createContext, useContext, useReducer, type ReactNode } from "react"
import type { Todo, Filter } from "@/types/todo"

type Action =
  | { type: "ADD_TODO"; title: string }
  | { type: "TOGGLE_TODO"; id: string }
  | { type: "DELETE_TODO"; id: string }
  | { type: "EDIT_TODO"; id: string; title: string }
  | { type: "SET_DESCRIPTION"; id: string; description: string }
  | { type: "SET_FILTER"; filter: Filter }

interface State {
  todos: Todo[]
  filter: Filter
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TODO": {
      const trimmed = action.title.trim()
      if (!trimmed) return state
      const todo: Todo = {
        id: generateId(),
        title: trimmed,
        description: "",
        completed: false,
        createdAt: Date.now(),
      }
      return { ...state, todos: [todo, ...state.todos] }
    }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t,
        ),
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
      }
    case "EDIT_TODO": {
      const trimmed = action.title.trim()
      if (!trimmed) return state
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, title: trimmed } : t,
        ),
      }
    }
    case "SET_DESCRIPTION":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, description: action.description } : t,
        ),
      }
    case "SET_FILTER":
      return { ...state, filter: action.filter }
    default:
      return state
  }
}

function filterTodos(todos: Todo[], filter: Filter): Todo[] {
  switch (filter) {
    case "active":
      return todos.filter((t) => !t.completed)
    case "completed":
      return todos.filter((t) => t.completed)
    default:
      return todos
  }
}

const TodoContext = createContext<{
  todos: Todo[]
  filteredTodos: Todo[]
  filter: Filter
  dispatch: React.Dispatch<Action>
} | null>(null)

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, { todos: [], filter: "all" })
  const filteredTodos = filterTodos(state.todos, state.filter)

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, filteredTodos, filter: state.filter, dispatch }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  const context = useContext(TodoContext)
  if (!context) throw new Error("useTodos must be used within a TodoProvider")
  return context
}
