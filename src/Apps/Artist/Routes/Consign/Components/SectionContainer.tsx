import { Color, color, Flex, FlexProps } from "@artsy/palette"
import React from "react"

// Doesn't exist in design system
export const LightPurpleColor = "#EAE5E7"

interface SectionContainerProps extends FlexProps {
  background?: Color | typeof LightPurpleColor
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  background = "white100",
  ...rest
}) => {
  // For sections with bg-colors outside of our design system
  const bg =
    background === LightPurpleColor ? LightPurpleColor : color(background)

  return (
    <Flex
      background={bg}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={2}
      pt={6}
      pb={6}
      {...rest}
    >
      {children}
    </Flex>
  )
}