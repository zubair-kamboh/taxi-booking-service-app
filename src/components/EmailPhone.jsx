import { Col, Row } from 'react-bootstrap'
import PassengersCounter from './PassengersCounter'

const EmailPhone = () => {
  return (
    <Row style={{ marginBottom: '2rem' }}>
      <Col lg={5} xs={12} style={{ display: 'flex', alignItems: 'center' }}>
        <PassengersCounter title="Phone No." span="(Preferred Whatsapp)" />
        <PassengersCounter title="Baby Seat" />
      </Col>
      <Col lg={2} xs={0}></Col>
      <Col
        lg={5}
        xs={12}
        style={{ display: 'flex' }}
        className="stack_luggage_passenger"
      >
        <PassengersCounter title="Email" />
      </Col>
    </Row>
  )
}

export default EmailPhone
