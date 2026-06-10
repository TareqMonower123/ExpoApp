import { useState } from "react"
import { TouchableOpacity, TextInput, Text, View, ScrollView, useCSSVariable } from "@/tw"
import { Plus, Check } from "lucide-react-native"
import { TodoProvider, useTodos } from "@/store/TodoContext"

function TodoContent() {
  const { todos, dispatch } = useTodos()
  const [input, setInput] = useState("")
  const textMuted = useCSSVariable("--color-text-muted")

  function handleAdd() {
    if (!input.trim()) return
    dispatch({ type: "ADD_TODO", title: input.trim() })
    setInput("")
  }

  return (
    <View className="flex-1 bg-bg">
      <View className="px-5 pt-4 pb-3">
        <Text className="text-xs text-text-secondary mb-3">
          {todos.filter((t) => !t.completed).length} remaining · {todos.filter((t) => t.completed).length} done
        </Text>

        <View className="flex-row gap-2">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="What needs to be done?"
            placeholderTextColor={textMuted}
            onSubmitEditing={handleAdd}
            returnKeyType="done"
            className="flex-1 bg-input text-text rounded-xl px-4 py-3 text-[15px] border border-border font-inter"
          />
          <TouchableOpacity
            onPress={handleAdd}
            activeOpacity={input.trim() ? 0.7 : 1}
            className={`rounded-xl px-5 items-center justify-center ${input.trim() ? "bg-accent" : "bg-accent/50"}`}
          >
            <Plus size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="flex-grow px-5 pb-10"
      >
        {todos.length === 0 ? (
          <View className="items-center pt-[60px]">
            <Text className="text-text-muted text-[15px]">
              No todos yet. Add one above!
            </Text>
          </View>
        ) : (
          <View className="gap-2">
            {todos.map((todo) => (
              <View
                key={todo.id}
                className="flex-row items-center bg-card rounded-xl px-4 py-[14px] border border-border"
              >
                <TouchableOpacity
                  onPress={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
                  activeOpacity={0.6}
                  className={`w-[22px] h-[22px] rounded-full border-2 items-center justify-center mr-3 ${
                    todo.completed
                      ? "bg-checkbox-active border-checkbox-active"
                      : "bg-transparent border-checkbox"
                  }`}
                >
                  {todo.completed && <Check size={12} color="#ffffff" strokeWidth={3} />}
                </TouchableOpacity>

                <Text
                  className={`flex-1 text-[15px] ${
                    todo.completed ? "text-completed line-through" : "text-text"
                  }`}
                >
                  {todo.title}
                </Text>

                <TouchableOpacity
                  onPress={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
                  activeOpacity={0.6}
                  className="ml-3 p-1"
                >
                  <Text className="text-[16px] text-delete-icon">✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <TodoProvider>
      <TodoContent />
    </TodoProvider>
  )
}
