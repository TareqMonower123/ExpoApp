import { JSX } from "react";
import { HotboxLogo } from "./sub-components/hotbox-logo";
import { View } from "react-native";

const icons = ["hotbox-logo"] as const;

type IconName = (typeof icons)[number];

interface IIconStore {
  iconName: IconName;
  className?: string;
  color?: string;
}

interface IIcon {
  iconName: IconName;
  color?: string;
}

function Icon({ iconName, color }: IIcon): JSX.Element {
  switch (iconName) {
    case "hotbox-logo": {
      return <HotboxLogo color={color} />;
    }
    default: {
      const unreachable: never = iconName;
      throw `Unregistered Icon: ${unreachable}`;
    }
  }
}

export function IconStore({
  iconName,
  className,
  color,
}: IIconStore): JSX.Element {
  return (
    <View className={className}>
      <Icon iconName={iconName} color={color} />
    </View>
  );
}
