import React from 'react'
import Card from '../componen/Card.jsx'
export default class Home extends React.Component{
  render() {
    return(
      <div>
        <Card name="Muhammad Ahyar" job="Web Dev"/>
        <Card name="Muhammad Aziz" job="Otomotif"/>
        <Card name="Dita Dwi Anggara" job="Desiner Room"/>
        <Card name="Muhammad Rifai" job="Busines Man"/>
      </div>
    )
  }
}
