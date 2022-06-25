import { Col, Row } from 'react-bootstrap'
import serviceImg from '../assets/images/airport-transfer-service-card-img.png'

const ATService = () => {
  return (
    <div className="at_service_container">
      <p className="service_des">Service</p>
      <h4 className="service_title">
        Airport <span>Transportation</span> Services
        <br /> in Sydney
      </h4>

      <Card />
    </div>
  )
}

const Card = () => {
  return (
    <div className="service_card_airtransport">
      <Row className="g-2" style={{ alignItems: 'center' }}>
        <Col lg={6} xs={12}>
          <p className="left_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            sed eros arcu leo amet massa. Sit quis duis mauris sit elementum
            luctus consequat id. Praesent quam libero, aliquam ultrices. Enim
            quis aenean morbi feugiat vulputate. Dignissim semper vitae etiam
            mauris. Porttitor imperdiet faucibus id justo, amet nisl, elementum
            vulputate. Tristique odio odio a tortor sapien mi interdum neque.
            Nisi accumsan, fermentum feugiat dictum commodo tellus. Ipsum
            bibendum egestas nisl turpis. Sagittis, nunc volutpat, mattis id
            maecenas tristique. Laoreet quam egestas et neque dis turpis id
            malesuada id. Imperdiet porta interdum pellentesque etiam vel.
            Tincidunt viverra habitant bibendum diam dignissim venenatis tortor
            gravida. Lobortis leo egestas pulvinar feugiat a, elementum platea.
            Nec ullamcorper praesent in volutpat risus libero imperdiet
            pellentesque consectetur. Elementum vulputate tincidunt posuere in
            nulla accumsan nulla pellentesque. Adipiscing odio ut in tincidunt
            sed massa et. Nibh praesent at lacus volutpat, erat ultrices
            convallis duis nec. Porttitor scelerisque nulla nec nisl integer
            risus rutrum lacinia.
          </p>
        </Col>
        <Col lg={6} xs={12}>
          <div className="wrapper">
            <img src={serviceImg} alt="serviceImg" />
          </div>
        </Col>
      </Row>

      <p className="card_outside_paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices sed
        eros arcu leo amet massa. Sit quis duis mauris sit elementum luctus
        consequat id. Praesent quam libero, aliquam ultrices. Enim quis aenean
        morbi feugiat vulputate. Dignissim semper vitae etiam mauris. Porttitor
        imperdiet faucibus id justo, amet nisl, elementum vulputate. Tristique
        odio odio a tortor sapien mi interdum neque. Nisi accumsan, fermentum
        feugiat dictum commodo tellus. Ipsum bibendum egestas nisl turpis.
        Sagittis, nunc volutpat, mattis id maecenas tristique. Laoreet quam
        egestas et neque dis turpis id malesuada id. Imperdiet porta interdum
        pellentesque etiam vel. Tincidunt viverra habitant bibendum diam
        dignissim venenatis tortor gravida. Lobortis leo egestas pulvinar
        feugiat a, elementum platea. Nec ullamcorper praesent in volutpat risus
        libero imperdiet pellentesque consectetur. Elementum vulputate tincidunt
        posuere in nulla accumsan nulla pellentesque. Adipiscing odio ut in
        tincidunt sed massa et. Nibh praesent at lacus volutpat, erat ultrices
        convallis duis nec. Porttitor scelerisque nulla nec nisl integer risus
        rutrum lacinia.
      </p>
    </div>
  )
}

export default ATService
