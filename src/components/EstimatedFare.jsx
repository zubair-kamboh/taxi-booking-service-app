import lineHalf from '../assets/images/line-half.svg'

const EstimatedFare = () => {
  return (
    <div className="estimated_price_container">
      <img src={lineHalf} alt="lineHalf" />
      <div className="wrapper">
        <p>Your Estimated Fare For This Trip!</p>
        <span>$50.79</span>
      </div>
      <img src={lineHalf} alt="lineHalf" />
    </div>
  )
}

export default EstimatedFare
