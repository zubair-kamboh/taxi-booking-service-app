import searchIcon from '../assets/images/faq-search-icon.png'
import Accordion from 'react-bootstrap/Accordion'

const Faq = () => {
  return (
    <div className="welcome_container faq_container">
      <h5 className="what_we_offer">FAQ</h5>
      <h3 className="welcome_to_us">HAVE ANY QUESTION</h3>
      <div className="faq_inner_contianer">
        <div className="img_container">
          <img src={searchIcon} alt="search-icon" className="img-fluid" />
        </div>

        <div className="faq_accordion">
          <Accordion
            defaultActiveKey="0"
            flush
            style={{ background: '#efefef' }}
          >
            <Accordion.Item
              eventKey="0"
              style={{ background: '#efefef', margin: '1rem 0rem' }}
            >
              <Accordion.Header>
                Vel eget ullamcorper donec urna pretium.
              </Accordion.Header>
              <Accordion.Body style={{ textAlign: 'start' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ut nunc dictum cras tristique. Felis scelerisque mi neque
                integer turpis. At lectus aliquet commodo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              style={{ background: '#efefef', margin: '1rem 0rem' }}
            >
              <Accordion.Header>
                Vel eget ullamcorper donec urna pretium.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ut nunc dictum cras tristique. Felis scelerisque mi neque
                integer turpis. At lectus aliquet commodo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{ background: '#efefef' }}>
              <Accordion.Header>
                Vel eget ullamcorper donec urna pretium.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ut nunc dictum cras tristique. Felis scelerisque mi neque
                integer turpis. At lectus aliquet commodo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="3"
              style={{ background: '#efefef', margin: '1rem 0rem' }}
            >
              <Accordion.Header>
                Vel eget ullamcorper donec urna pretium.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ut nunc dictum cras tristique. Felis scelerisque mi neque
                integer turpis. At lectus aliquet commodo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="4"
              style={{ background: '#efefef', margin: '1rem 0rem' }}
            >
              <Accordion.Header>
                Vel eget ullamcorper donec urna pretium.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ut nunc dictum cras tristique. Felis scelerisque mi neque
                integer turpis. At lectus aliquet commodo.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Faq
