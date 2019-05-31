import React from 'react'
import { Divider } from 'semantic-ui-react'

const polaroid = {
  width: '80%',
  backgroundColor: 'white',
  boxShadow: '0px 0px 27px 13px rgba(196,196,196,0.6)',
  marginBottom: '25px',
};

const image = {
  maxWidth: '80%',
  maxHeight: '80%',
};

const text = {
  fontSize: '30px',
};

const container = {
  textAlign: 'center',
  padding: '10px 20px',
  width: '100%',
};

export const Polaroid = (props) => (
  <div style={polaroid}>
    <img style={image} src={require('../../icons/Theme2/' + props.image)} />
    <Divider />
    <div style={container}>
      <p style={text}>{props.text}</p>
    </div>
  </div>
)

// {this.texts.map(txt => (
//   <p style={text}>{txt}</p>
// ))}