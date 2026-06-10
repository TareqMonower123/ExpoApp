import { useState, useEffect, useRef } from "react"
import { Text, TouchableOpacity, View, useCSSVariable } from "@/tw"
import { Play, Pause, RotateCcw } from "lucide-react-native"

export default function TimerScreen() {
  const textColor = useCSSVariable("--color-text")
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const startRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (running) {
      startRef.current = Date.now() - elapsed
      function tick() {
        setElapsed(Date.now() - startRef.current)
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [running])

  function reset() {
    setRunning(false)
    setElapsed(0)
  }

  const totalMs = elapsed
  const mins = Math.floor(totalMs / 60000)
  const secs = Math.floor((totalMs % 60000) / 1000)
  const cs = Math.floor((totalMs % 1000) / 10)
  const display = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${String(cs).padStart(2, "0")}`

  return (
    <View className="flex-1 bg-bg">
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-[64px] font-[200] text-text tabular-nums mb-12">
          {display}
        </Text>

        <View className="flex-row gap-6">
          <TouchableOpacity
            onPress={() => setRunning(!running)}
            activeOpacity={0.7}
            className="w-[72px] h-[72px] rounded-full bg-accent items-center justify-center"
          >
            {running ? <Pause size={28} color="#ffffff" /> : <Play size={28} color="#ffffff" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={reset}
            activeOpacity={0.7}
            className="w-[72px] h-[72px] rounded-full bg-card border border-border items-center justify-center"
          >
            <RotateCcw size={28} color={textColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
