
import React, { ReactNode } from 'react'

import { EditPropertyProps } from '../base-property-props'
import { Label, FormGroup } from '../../design-system'

export default class Show extends React.PureComponent<EditPropertyProps> {
  render(): ReactNode {
    const { property, record } = this.props

    const value = record.params[property.name] || ''

    return (
      <FormGroup>
        <Label>{property.label}</Label>
        {value.split(/(?:\r\n|\r|\n)/g).map((line, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </FormGroup>
    )
  }
}
