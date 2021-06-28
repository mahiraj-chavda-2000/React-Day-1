import React from 'react';

function Card(props) {
    return (
        <>
            {/* <div className="card">
                <img src={props.imgpath} alt="No Image"/>



                <div class="container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.desc}</p>
                </div>
         
        </div> */}


            <div class="row">
                <div class="column">
                    <div class="card">
                        <h3>Card 1</h3>
                        <img src={props.imgpath} alt="No Image"/>
                        <p>{props.desc}</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <h3>Card 2</h3>
                        <img src={props.imgpath} alt="No Image"/>
                        <p>{props.desc}</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <h3>Card 3</h3>
                        <img src={props.imgpath} alt="No Image"/>
                        <p>{props.desc}</p>
                    </div>
                </div>

             
            </div>

        </>
    );
}


export default Card;