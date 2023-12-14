import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo from '../asserst/Group 7.png'

const ArticleCard = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            {/* Article Image */}
            <Card.Img variant="top" src={logo} alt="Article Image" />

            {/* Card Body */}
            <Card.Body>
              {/* Article Title */}
              <Card.Title>✍️ Article: What if famous brands had regular fonts?</Card.Title>

              {/* Author Information */}
              <Card.Text>Meet RegulaBrands! Sarthak Kamra</Card.Text>

              {/* Views Count */}
              <Card.Text>
                <small className="text-muted">1.4k views</small>
              </Card.Text>

              {/* Social Icons */}
              <div className="d-flex justify-content-end align-items-center">
                {/* To Column Icon */}
                <i className="bi bi-columns text-secondary me-2"></i>

                {/* Share Icon */}
                <i className="bi bi-share text-primary"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className='md-6 justify-content-center'>
        <h1>hi</h1>

        </Col>


        

        {/* Add another Col for the second card */}
       
      </Row>
    </Container>
  );
};

export default ArticleCard;
