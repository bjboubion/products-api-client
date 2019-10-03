import React from 'react';

const ComponentCard = (props) => {
    const { name, id, shortDescription } = props.item;

    let card = <div className="card border-dark my-3">
                    <div className="card-header">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-subtitle">{id}</p>
                    </div>
                    <div className="card-body">
                        <small className="text-black">{shortDescription}</small>
                    </div>
                </div>;

    return(
        <div>
            { card }
        </div>
    );
}

export default ComponentCard;