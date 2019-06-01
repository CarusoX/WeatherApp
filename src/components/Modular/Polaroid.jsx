import React from 'react'
import { Divider } from 'semantic-ui-react'

const big_polaroid = {
  border: '2px solid gray',
  borderRadius: '5px',
  boxShadow: '0px 0px 27px 13px rgba(196,196,196,0.3)',
  backgroundColor: 'white',
  flexGrow: '2',
  alignItems: 'stretch',
  width: '75%'
};

const small_polaroid = {
  border: '2px solid gray',
  borderRadius: '5px',
  boxShadow: '0px 0px 20px 10px rgba(196, 196, 196, 0.7)',
  backgroundColor: 'white',
  marginBottom: '10%',
  maxWidth: '17%',
  height: '70%'
};

const big_image = {
  maxWidth: '80%',
  maxHeight: '80%',
};

const small_image = {
  marginTop: '10%',
  maxWidth: '80%',
  maxHeight: '80%',
};

const container = {
  padding: '10%'
};

const big_text = {
  fontSize: '150%',
};

const small_header = {
  fontSize: '130%',
  fontWeight: '900',
  marginTop: '0%'
};

const small_text = {
  fontSize: '100%',
  marginTop: '0%'
};

export const BigPolaroid = (props) => (
  <div style={big_polaroid}>
    <img style={big_image} src={require('../../icons/Theme2/' + props.image)} />
    <Divider />
    <div style={container}>
      <p style={big_text}>{props.text}</p>
      <p>Max: </p>
      <p>Min: </p>
    </div>
  </div>
)

export const SmallPolaroid = (props) => (
  <div style={small_polaroid}>
    <img style={small_image} src={require('../../icons/Theme2/' + props.image)} />
    <Divider style={{marginBottom: '0%'}} />
    <div style={container}>
      <p style={small_header}>{props.text}</p>
      <p style={small_text}>Max: {props.max}{props.unit}</p>
      <p style={small_text}>Min: {props.min}{props.unit}</p>
    </div>
  </div>
)

// {props.texts.map(txt => (
//   <p style={text}>{txt}</p>
// ))}