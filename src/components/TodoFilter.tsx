import { Text, TouchableOpacity, View } from "@/tw"
import { useTodos } from "@/store/TodoContext"
import type { Filter } from "@/types/todo"

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
]

export default function TodoFilter() {
  const { filter, dispatch } = useTodos()

  return (
    <View className="flex-row gap-2">
      {filters.map((f) => {
        const active = filter === f.value
        return (
          <TouchableOpacity
            key={f.value}
            onPress={() => dispatch({ type: "SET_FILTER", filter: f.value })}
            activeOpacity={0.7}
            className={`px-4 py-2 rounded-full border ${
              active
                ? "bg-chip-active border-border text-chip-active-text"
                : "bg-chip border-border text-chip-text"
            }`}
          >
            <Text
              className={`text-xs font-inter-bold ${
                active ? "text-chip-active-text" : "text-chip-text"
              }`}
            >
              {f.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
