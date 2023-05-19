import styled from "styled-components";

export default function Result(props) {
  return (
    <StyledContainer>
      <div>
        <img src="./images/illustration-thank-you.svg" />
      </div>
      <div className="rate-section">
        <p>You selected {props.rate} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p className="rating-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&#39;t hesitate to get in touch!
      </p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 328px;
  height: 360px;
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 15px;
  .rate-section {
    width: 168px;
    height: 32px;
    background: #262e38;
    border-radius: 22.5px;
    margin: 24px 0;
  }
  .rate-section p {
    font-size: 14px;
    font-weight: 400;
    color: #fc7614;
    padding: 5px 12px;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
  }
  .rating-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #969fad;
    width: 280px;
    text-align: center;
    margin-top: 10px;
  }

  /* styles for desktop */

  @media only screen and (min-width: 1440px) {
    width: 412px;
    height: 416px;
    padding-top: 45px;
    .rate-section {
      width: 194px;
      height: 32px;
      padding: 1px 12px;
      margin: 32px 0;
    }
    h2 {
      font-size: 28px;
    }
    .rating-text {
      font-size: 15px;
      line-height: 24px;
      width: 336px;
    }
  }
`;
