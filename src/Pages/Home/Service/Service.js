import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, balance, email, picture, guid } = service;
    return (
        <div className="service pb-3">
            <img src={picture} alt="" />
            <h3>{guid}</h3>
            <h4>Doctor:{name}</h4>
            <h5>Service Fee: {balance}$</h5>
            <p className="px-3">Email:{email}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-primary">Pay and Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;