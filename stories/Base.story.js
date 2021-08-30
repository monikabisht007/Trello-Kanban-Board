import React from 'react'
import {storiesOf} from '@storybook/react'

import Board from '../src'

const data = require('./data/base.json');

storiesOf('Board', module).add('Kanban Board', () => <Board data={data} />, {
  info: 'A complete Kanban Board with Multiple Stories'
})
