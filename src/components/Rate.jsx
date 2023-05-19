import styled from "styled-components";

export default function Rate(props) {
  const buttons = [1, 2, 3, 4, 5];
  return (
    <StyledContainer>
      <div className="icon">
        <img src="./images/icon-star.svg" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btns">
        {buttons.map((item) => {
          return (
            <button
              onClick={() => {
                props.setRate(item);
              }}
              key={item}
              className={item == props.rate ? "active" : ""}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        className="submit"
        onClick={() => {
          if (props.rate) {
            props.setSubmit(true);
          }
        }}
      >
        SUBMIT
      </button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 328px;
  height: 360px;
  padding: 24px 0 0 24px;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 15px;
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #262e38;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 16px 0 10px 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #969fad;
    width: 280px;
  }
  .btns {
    display: flex;
    gap: 18px;
    margin: 24px 0 30px 0;
  }
  button {
    width: 42px;
    height: 42px;
    background: #262e38;
    color: #7c8798;
    border-radius: 50%;
    border: none;
  }
  .active {
    background-color: #fc7614;
    color: #ffffff;
  }
  .submit {
    width: 280px;
    height: 45px;
    background: #fc7614;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.8px;
    border-radius: 22.5px;
    border: none;
  }

  /* styles for desktop */

  @media only screen and (min-width: 1440px) {
    width: 412px;
    height: 416px;
    padding: 32px 0 0 32px;
    .icon {
      width: 48px;
      height: 48px;
    }
    h1 {
      font-size: 28px;
      margin: 32px 0 8px 0;
    }
    p {
      font-size: 15px;
      line-height: 24px;
      width: 340px;
    }
    .btns {
      gap: 21px;
    }
    button {
      width: 51px;
      height: 51px;
    }
    button:hover {
      cursor: pointer;
      background: #7c8798;
      color: #ffffff;
      transition: 0.3s;
    }
    .submit {
      width: 340px;
      font-size: 15px;
      letter-spacing: 2px;
    }
    .submit:hover {
      cursor: pointer;
      background: #ffffff;
      color: #fc7614;
      transition: 0.3s;
    }
  }
`;
