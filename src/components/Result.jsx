import './Result.css' ;

export default function Result(props) {
    return (
        <div className='result-container'>
            <div><img src="./images/illustration-thank-you.svg"/></div>
            <div className='rate-section'>
                <p>You selected {props.rate} out of 5</p>
            </div>
            <h2>Thank you!</h2>
            <p className='rating-text'>
            We appreciate you taking the time to give a rating. If you ever need more support, don&#39;t hesitate to get in touch!
            </p>
        </div>
    )
}