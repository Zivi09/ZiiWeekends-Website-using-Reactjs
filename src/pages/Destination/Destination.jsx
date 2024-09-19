import React from 'react'
import { Breadcrumb } from '../../components/Breadcrumbs/Breadcrumbs';
import { Col,Container,Row } from 'react-bootstrap';
import { destinationsData } from '../../utils/data';
import Cards from '../../components/Cards/Cards'
const Destination = () => {
  return (
    <>
        <Breadcrumbs title='Destination' pagename="Destinations" />
        <section className='py-5'>
          <Container>
            <Row>
            {destinationsData.map((destination, inx) => {
                  return (
                    <Col md="3" sm="6" key={inx} className='pb-4'>
                    <Cards destination={destination} key={inx} />
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </section>
    </>
  )
}

export default Destination
