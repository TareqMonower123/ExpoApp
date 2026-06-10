import { Text, TouchableOpacity, View } from "@/tw"
import type { Todo } from "@/types/todo"
import { useTodos } from "@/store/TodoContext"

interface Props {
  todo: Todo
  onPress: (todo: Todo) => void
}

export default function TodoItem({ todo, onPress }: Props) {
  const { dispatch } = useTodos()

  function handleToggle() {
    dispatch({ type: "TOGGLE_TODO", id: todo.id })
  }

  function handleDelete() {
    dispatch({ type: "DELETE_TODO", id: todo.id })
  }

  return (
    <TouchableOpacity
      onPress={() => onPress(todo)}
      activeOpacity={0.7}
      className="flex-row items-center bg-card rounded-xl px-4 py-[14px] border border-border"
    >
      <TouchableOpacity
        onPress={handleToggle}
        activeOpacity={0.6}
        className={`w-[22px] h-[22px] rounded-full border-2 items-center justify-center mr-3 ${
          todo.completed
            ? "bg-checkbox-active border-checkbox-active"
            : "bg-transparent border-checkbox"
        }`}
      >
        {todo.completed && (
          <Text className="text-white text-[11px] font-bold">✓</Text>
        )}
      </TouchableOpacity>

      <View className="flex-1">
        <Text
          className={`text-[15px] font-inter ${
            todo.completed ? "text-completed line-through" : "text-text"
          }`}
        >
          {todo.title}
        </Text>
        {todo.description ? (
          <Text
            numberOfLines={1}
            className="text-xs text-text-muted mt-0.5 font-inter"
          >
            {todo.description}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.6}
        className="ml-3 p-1"
      >
        <Text className="text-[16px] text-delete-icon">✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
