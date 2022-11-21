// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
    imageDisplay: 'head',
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
        imageDisplay: 'head',
      }))
    } else {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        tailCount: prevState.tailCount + 1,
        imageDisplay: 'tail',
      }))
    }
  }

  render() {
    const {totalCount, headCount, tailCount, imageDisplay} = this.state
    let coinImage
    if (imageDisplay === 'head') {
      coinImage = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="coin-image"
        />
      )
    } else {
      coinImage = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="coin-image"
        />
      )
    }
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading-element">Coin Toss Game</h1>
          <p className="game-description">Heads (or) Tails</p>
          {coinImage}
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="stats-display">
            <p className="stats">{`Total: ${totalCount}`}</p>
            <p className="stats">{`Heads: ${headCount}`}</p>
            <p className="stats">{`Tails: ${tailCount}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
