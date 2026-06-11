import { JSX } from "react"
import { HotboxLogo } from "./sub-components/hotbox-logo"
import { IIconStore } from "./interface"
import { View } from "@/tw"

interface IIcon {
  iconName: IIconStore['iconName']
  color?: string
}

/**
 * Renders a specific icon based on the given icon name.
 * @param {IIcon} props - The props containing the icon name.
 * @returns {JSX.Element} - The rendered icon.
 */
function Icon({ iconName, color }: IIcon): JSX.Element {
  switch (iconName) {
    case 'hotbox-logo': {
      return <HotboxLogo color={color} />
    }
    default: {
      const unreachable: never = iconName
      throw `Unregistered Icon: ${unreachable}`
    }
  }
}

/**
 * Renders an icon component with specified properties.
 * @param {IIconStore} props - The props for the icon component.
 * @returns {JSX.Element} - The rendered icon component.
 */
export function IconStore({ iconName, className, color }: IIconStore): JSX.Element {
  return (
    <View className={className}>
      <Icon iconName={iconName} color={color} />
    </View>
  )
}
