import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/img-1.png';
import banner2 from '../../../images/banner/img-2.png';
import banner3 from '../../../images/banner/img-3.png';

const Banner = () => {
    return (
        <>
<Carousel variant="dark">
    <Carousel.Item>
        <img
        style={{height:'730px'}}
        className="d-block w-100"
        src={banner1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h5>We are at your service</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        style={{height:'730px'}}
        className="d-block w-100"
        src={banner2}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Our Doctors</h5>
        <p>The most advanced quality ICU service</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        style={{height:'730px'}}
        className="d-block w-100"
        src={banner3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Covid-19</h5>
        <p>There are separate security measures for covid-19</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;