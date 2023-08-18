import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  changeFirstNameVisibility = () => {
    const {isFirstNameVisible} = this.state

    this.setState({isFirstNameVisible: !isFirstNameVisible})
  }

  changeLastNameVisibility = () => {
    const {isLastNameVisible} = this.state

    this.setState({isLastNameVisible: !isLastNameVisible})
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="bg-container">
        <div className="show-hide-card">
          <h1 className="heading">Show/Hide</h1>

          <div className="items-container">
            <div className="item-container">
              <button
                type="button"
                onClick={this.changeFirstNameVisibility}
                className="button"
              >
                Show/Hide Firstname
              </button>
              {isFirstNameVisible && (
                <div className="output-container">
                  <p>Joe</p>
                </div>
              )}
            </div>

            <div className="item-container">
              <button
                type="button"
                onClick={this.changeLastNameVisibility}
                className="button"
              >
                Show/Hide Lastname
              </button>
              {isLastNameVisible && (
                <div className="output-container">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
