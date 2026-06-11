export const icons = [
  'hotbox-logo',
] as const

export type IconName = (typeof icons)[number]

export interface IIconStore {
  /**
   * Specifies the name of the icon to be displayed.
   */
  iconName: IconName
  className?: string
  /**
   * Color for the icon (used for SVG currentColor on native).
   */
  color?: string
}
