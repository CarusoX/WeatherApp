import React from 'react'
import { Divider } from 'semantic-ui-react'

const polaroid = {
  backgroundColor: 'white',
  boxShadow: '0px 0px 27px 13px rgba(196,196,196,0.3)',
};

const image = {
  maxWidth: '80%',
  maxHeight: '80%',
};

const container = {
  padding: '5%'
};

const text = {
  fontSize: '150%',
};

export const Polaroid = (props) => (
  <div style={{...polaroid, ...props.style}}>
    <img style={image} src={require('../../icons/Theme2/' + props.image)} />
    <Divider />
    <div style={container}>
      <p style={text}>{props.text}</p>
    </div>
  </div>
)

// {props.texts.map(txt => (
//   <p style={text}>{txt}</p>
// ))}