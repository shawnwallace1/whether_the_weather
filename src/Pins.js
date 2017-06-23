import React, {Component} from 'react'
const boards = [
  {
    weather: 'precwinter',
    boardID: '338755271910823827'
  },
  {
    weather: 'precwarm',
    boardID: '338755271910823826'
  },
  {
    weather: 'winter',
    boardID: '338755271910417861'
  },
  {
    weather: 'spring',
    boardID: '338755271910823821'
  },
  {
    weather: 'summer',
    boardID: '338755271910342940'
  },
  {
    weather: 'precautumn',
    boardID: '338755271910823824'
  },
  {
    weather: 'autumn',
    boardID: '338755271910823822'
  }
]

const getCorrectBoard = (weather) => boards.filter((board) => board.weather === weather)

class Pins extends React.Component {

  state = {
    pins: []
  }

  fetchBoard = (weather) => {
    const [currentBoard] = getCorrectBoard(weather)
    fetch(`https://api.pinterest.com/v1/boards/${currentBoard.boardID}/pins/?access_token=AanQg2wagvJBQaZE9mrENe5ctPdCFMmM1NfWAoREGaxOIwBDZwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cattribution%2Cboard%2Cmetadata%2Cmedia%2Ccreated_at%2Ccreator%2Coriginal_link`)
    .then((raw) => raw.json())
    .then((res) => {
      console.log('data', res)
      this.setState({
        pins: res.data
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevProps.weather !== this.props.weather) {
        this.fetchBoard(this.props.weather)
      }
  }

  render() {
    return (
      <div>
        <h1>
          <p className="outfitsHeader" style={{
            fontSize: '15px',
            textDecoration: 'initial'
          }}>

          </p>
        </h1>
        <div id="pins">
          {this.state.pins.map((pin) => {
            return (
              <div style={{height:"300px", width:"300px", backgroundSize:"cover", backgroundImage:"url('"+pin.image.original.url+"')"}}></div>
          )
            //   <img src={pin.image.original.url} style={{
            //       maxHeight: '500px'
            //     }}/>
            // )
          })}
        </div>
      </div>

    );
  }
}

export default Pins;
