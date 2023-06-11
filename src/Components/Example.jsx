/* eslint-disable react/prop-types */
import  { PureComponent } from 'react'

export default class Example extends PureComponent {
  render() {
    return (
      <div>Example {this.props.someData}</div>
    )
  }
}
