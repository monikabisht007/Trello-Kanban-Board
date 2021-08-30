import React from 'react'

import Draggable from './dnd/Draggable'
import Container from './dnd/Container'
import BoardContainer from './controllers/BoardContainer'
import Board from './controllers/Board'
import Lane from './controllers/Lane'
import DefaultComponents from './components'


import widgets from './widgets'


export {
  Draggable,
  Container,
  BoardContainer,
  Lane,
  widgets
}

export { DefaultComponents as components }

const DEFAULT_LANG='en'

export default ({ components, lang=DEFAULT_LANG, ...otherProps }) => {
  return <Board components={{...DefaultComponents, ...components}} {...otherProps} />
}
