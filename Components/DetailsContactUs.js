import React from 'react';

const DetailsContactUs = (props) => {
    return (
        <div>
             <h1 className="text-center text-primary">( {props.index+1} )</h1>
            <div style={{border:"1px solid grey",borderRadius:"5px"}} className="container">
               <br/>
                <h4> <b>Name: </b> {props.name}</h4>
                
                <hr/>
                <h4> <b>Email: </b> {props.email}</h4>

                <hr/>
                <h4> <b>Phone: </b> {props.phone}</h4>
                
                <hr/>
                <h4> <b>Subject: </b> {props.subject}</h4>
                
                <hr/>
                <h4> <b>Message: </b> {props.message}</h4>
                
                <hr/>
                <h5> <b>Time Submitted: </b> {props.time}</h5>
            </div>
        </div>
    )
}
export default DetailsContactUs;