import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize, gender } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img style={{width:"400px"}} src={img} alt="" />
            <h3 className="text-success">{expertize}</h3>
            <h5>{name}</h5>
            <p>{gender}</p>
        </div>
    );
};

export default Expert;