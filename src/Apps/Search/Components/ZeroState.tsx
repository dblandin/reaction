import { Box, Flex, Serif } from "@artsy/palette"
import { SendFeedback } from "Apps/Search/Components/SendFeedback"
import { FilterState } from "Apps/Search/FilterState"
import React, { FC } from "react"
import { Subscribe } from "unstated"

interface Props {
  term: string
}

export const ZeroState: FC<Props> = props => {
  const { term } = props

  return (
    <Subscribe to={[FilterState]}>
      {(filters: FilterState) => {
        const { hasFilters } = filters
        return (
          <Flex
            width="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box m={3} textAlign="center">
              <Serif size="6">
                {hasFilters
                  ? "No results found."
                  : `No results found for "${term}".`}
              </Serif>
              <Serif size="3">
                {hasFilters
                  ? "Try removing some filters or try another search term."
                  : "Try checking for spelling errors or try another search term."}
              </Serif>
            </Box>
            <Box width="100%">
              <SendFeedback />
            </Box>
          </Flex>
        )
      }}
    </Subscribe>
  )
}
