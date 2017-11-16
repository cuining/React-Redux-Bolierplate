import React from 'react'

import Arrow from './arrow'
import Checked from './checked'
import Close from './close'
import Crop from './crop'
import Filter from './filter'
import RedoUndo from './redo-undo'
import Success from './success'
import Text from './text'
import Unchecked from './unchecked'
import ZoomIn from './zoom-in'
import ZoomOut from './zoom-out'
import Edit from './edit'
import Delete from './delete'
import Rotate from './rotate'

function CustomIcon () {}

const Icon = new CustomIcon()

Icon.arrow = Arrow
Icon.checked = Checked
Icon.close = Close
Icon.crop = Crop
Icon.filter = Filter
Icon['redo-undo'] = RedoUndo
Icon.success = Success
Icon.text = Text
Icon.unchecked = Unchecked
Icon['zoom-in'] = ZoomIn
Icon['zoom-out'] = ZoomOut
Icon.edit = Edit
Icon.delete = Delete
Icon.rotate = Rotate

export default ({ type, ...props }) => {
  if (type in Icon) {
    const C = Icon[type]
    return <C {...props} />
  }
  return null
}
