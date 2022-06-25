import { useState } from 'react'
import { Col } from 'react-bootstrap'

import HeaderButton from './HeaderButton'

import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers'

// icons and images
import passengerIcon from '../assets/images/ordersummary_account.svg'
import plus from '../assets/images/faq-plus.png'
import minus from '../assets/images/faq-minus.png'
import eclipse from '../assets/images/Ellipse 11.svg'
import carIcon from '../assets/images/ordersummery_car.svg'
import luggageIcon from '../assets/images/ordersummary_luggage.svg'
import verticleLine from '../assets/images/order_summary_verticle _line.svg'
import babyCarSeatIcon from '../assets/images/baby-car-seat.svg'
import lineHalf from '../assets/images/line-half.svg'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import OrderSummaryIcons from './OrderSummaryIcons'

const PassengersCounter = ({ title }) => {
  return (
    <Col
      sm={
        title === 'Additional Instructions' || title === 'Order Summary'
          ? 12
          : 6
      }
      xs={12}
    >
      <div
        className={
          title === 'Passengers'
            ? 'passengers_luggage_innerContainer'
            : 'name_field_container'
        }
        style={{
          marginLeft:
            title === 'Last Name' || title === 'Time' ? '1rem' : '0px',
        }}
      >
        <p className="title">{title}</p>
        {title === 'First Name' && <NameInput placeholder="First Name" />}
        {title === 'Last Name' && <NameInput placeholder="Last Name" />}
        {title === 'Date' && <CustomDatePicker />}
        {title === 'Time' && <CustomDatePicker timePicker={true} />}

        {title === 'Additional Instructions' && <AdditionalInstructions />}
        {title === 'Order Summary' && <OrderSummary />}

        {title === 'Passengers' && (
          <div className="wrapper">
            <PassengerData />
          </div>
        )}
      </div>
    </Col>
  )
}

const PassengerData = () => {
  const [input, setInput] = useState(1)

  return (
    <>
      <div className="wrapper_btn">
        <img src={passengerIcon} alt="passengerIcon" />
      </div>
      <div
        className="wrapper_btn"
        onClick={() => setInput(input - 1)}
        style={{ cursor: 'pointer' }}
      >
        <img src={minus} alt="MinusIcon" />
      </div>
      <div className="wrapper_btn">
        <input
          type="number"
          min="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputfield"
        />
      </div>
      <div
        className="wrapper_btn"
        onClick={() => setInput(input + 1)}
        style={{ cursor: 'pointer' }}
      >
        <img src={plus} alt="plusIcon" />
      </div>
    </>
  )
}

const NameInput = ({ placeholder }) => {
  return (
    <>
      <div className="wrapper">
        <input type="text" placeholder={placeholder} className="name_input" />
      </div>
    </>
  )
}
const CustomDatePicker = ({ timePicker }) => {
  const [startDate, setStartDate] = useState(null)
  const [startTime, setStartTime] = useState(null)

  if (timePicker === true) {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="date_time_picker_mui time_specific">
          <KeyboardTimePicker
            variant="inline"
            margin="normal"
            id="time-picker"
            label="Time"
            value={startTime}
            onChange={(time) => setStartTime(time)}
            keyboardIcon={<AccessTimeIcon />}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
    )
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="date_time_picker_mui">
        <KeyboardDatePicker
          variant="inline"
          format="MM/dd/yyy"
          margin="normal"
          label="Date"
          id="date-picker"
          value={startDate}
          onChange={(date) => setStartDate(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          keyboardIcon={<CalendarMonthIcon />}
        />
      </div>
    </MuiPickersUtilsProvider>
  )
}

const AdditionalInstructions = () => {
  return (
    <div className="orderInstruction_outer_container">
      <div className="orderInstrudtions_container">
        <textarea
          type="textarea"
          placeholder="Add Your Notes"
          rows="11"
          style={{ resize: 'none' }}
        />
      </div>
      <div className="btns">
        <HeaderButton color="#FFFFFF" bg="#000000" title="Book For Later" />
        <HeaderButton color="#FFFFFF" bg="#F9B233" title="Book My Ride" />
      </div>
    </div>
  )
}
const OrderSummary = () => {
  return (
    <div className="ordersummary_container">
      <div className="date_time">
        <p>14 June, Thu 11:00</p>
        <a href="#/">Edit</a>
      </div>

      <div className="order_summary_wrapper">
        <div className="left">
          <img src={eclipse} className="eclips" alt="eclips" />
          <img src={verticleLine} className="verticleLine" alt="verticleLine" />
          <img src={eclipse} className="eclips" alt="eclips" />
        </div>
        <div className="right">
          <p className="from">
            Sydney International Airport
            <br />
            (SYD)
          </p>
          <p className="airport_name">Sydney Airport, Australia</p>
          <p className="to">Port Jackson</p>
          <p className="to_second">Port Jackson</p>

          <div className="icons">
            <OrderSummaryIcons title="Sedan" icon={carIcon} />
            <OrderSummaryIcons title="1" icon={passengerIcon} />
            <OrderSummaryIcons title="1" icon={luggageIcon} />
            <OrderSummaryIcons title="1" icon={babyCarSeatIcon} />
          </div>

          <div className="lineImg">
            <img src={lineHalf} alt="lineHalf" />
          </div>
          <div className="price_wrapper">
            <p className="price">$109</p>
            <p className="des">Total Price</p>
            <p className="des">Taxes & Fees Included</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassengersCounter
