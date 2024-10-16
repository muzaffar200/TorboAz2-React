import React from 'react'

function Card(props) {
console.log(props.item);
    return (
        <>
            <div className="box">
                <div className="product-top">
                    <img src={props.item.images[0]} alt="avto-foto" />
                    <svg onclick="fill(this)" className="heart-icon" width={25} height={25} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
                <div className="product-bottom">
                    <h4>{props.item.price}{props.item.currency}</h4>
                    <p className="marka-model">{props.item.brand} <span>{props.item.model}</span></p>
                    <p className="year">{props.item.year}, {props.item.engine} L, {props.item.odometer} km</p>
                </div>
            </div>



        </>
    )
}

export default Card