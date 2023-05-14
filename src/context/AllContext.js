import React from 'react'

const AllContext = React.createContext({
  activeId: '',
  ClickActive: () => {},
  cardList: [],
  isHeadingInputTrue: false,
  isDescriptionTrue: false,
  headingInputClick: () => {},
  clickDescriptionInput: () => {},
  changeHeadingValue: () => {},
  changeDescriptionValue: () => {},
  onBlurHeading: () => {},
})

export default AllContext
