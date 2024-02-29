import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {}

  state = {
    mangoesCount: 4,
    bananasCount: 4,
  }

  onClickEatBanana() {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango() {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div class="app-container" className="app-container">
        <div class="fruits-counter" className="fruits-counter">
          <h1 class="count-text" className="count-text">
            Bob ate{' '}
            <span class="count" className="count">
              {mangoesCount}
            </span>{' '}
            mangoes
            <span class="count" className="count">
              {' '}
              {bananasCount}
            </span>{' '}
            bananas
          </h1>

          <div
            class="counters-control-container"
            className="counters-control-container"
          >
            <div class="counter-control" className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="banana"
                class="fruit-image"
                className="fruit-image"
              />
              <div class="button-container" className="button-container">
                <button
                  type="button"
                  class="button"
                  className="button"
                  onclick={this.onClickEatMango()}
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div class="counter-control" className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                class="fruit-image"
                className="fruit-image"
              />
              <div class="button-container" className="button-container">
                <button
                  type="button"
                  class="button"
                  className="button"
                  onclick={this.onClickEatBanana()}
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
