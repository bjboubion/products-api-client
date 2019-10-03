import React from 'react';

const KitCard = (props) => {
    const { title, id, shortDescription } = props.item;

    let card = <div className="card border-dark my-3">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="text-muted">{id}</p>
                        <small className="text-black">{shortDescription}</small>
                    </div>
                </div>;

    return(
        <div>
            { card }
        </div>
    );
}

export default KitCard;