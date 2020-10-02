import React from "react";

/**
 * The under construction animation on the landing page.
 */
const UnderConstruction: React.FC = () => {
  return (
    <>
      <div className="uc-container">
        <div className="cat">
          <div className="head">
            <div className="ear-container">
              <div className="ear--left"></div>
              <div className="ear--right"></div>
            </div>
            <div className="eye-container">
              <div className="eye--left"></div>
              <div className="eye--right"></div>
            </div>
            <div className="nose"></div>
          </div>
          <div className="body"></div>
          <div className="hand--left"></div>
          <div className="hand--right"></div>
        </div>
        <div className="lap lap--left">
          <div className="lid"></div>
          <div className="keyboard"></div>
        </div>
        <div className="lap lap--center">
          <div className="lid"></div>
        </div>
        <div className="lap lap--right">
          <div className="lid"></div>
          <div className="keyboard"></div>
        </div>
      </div>

      <style>
        {`
          .uc-container {
            position: relative;
            width: 300px;
            height: 300px;
            transform: scale(0.6);
            margin: -40px 0px;
          }
          .uc-container .cat {
            position: absolute;
            top: 10%;
            left: 50%;
            width: 200px;
            height: 100px;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }
          .uc-container .cat .head {
            position: absolute;
            bottom: 0px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            background: #ffffff;
            width: 130px;
            height: 100px;
            border: 5px solid #13161a;
            border-radius: 50%;
          }
          .uc-container .cat .head:after,
          .uc-container .cat .head:before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            -webkit-transform-origin: left center;
            transform-origin: left center;
            width: 70%;
            height: 50px;
            background: #13161a;
            border-radius: 100%;
            z-index: -1;
          }
          .uc-container .cat .head:before {
            -webkit-transform: translateY(-50%) rotate(45deg) rotateY(180deg)
              rotate(90deg);
            transform: translateY(-50%) rotate(45deg) rotateY(180deg)
              rotate(90deg);
          }
          .uc-container .cat .head:after {
            -webkit-transform: translateY(-50%) rotate(45deg);
            transform: translateY(-50%) rotate(45deg);
          }
          .uc-container .cat .head .ear-container {
            position: absolute;
            top: 0px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            height: 20px;
            width: 80%;
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
          }
          .uc-container .cat .head .ear-container div[class^="ear"] {
            position: relative;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 40px solid #e6096c;
          }
          .uc-container .cat .head .ear-container div[class^="ear"]:before,
          .uc-container .cat .head .ear-container div[class^="ear"]:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 32px;
            height: 32px;
            background: #13161a;
          }
          .uc-container .cat .head .ear-container div[class^="ear"]:before {
            border-radius: 40px 0px;
            -webkit-transform: translate(-26px, 4px) rotate(-19deg);
            transform: translate(-26px, 4px) rotate(-19deg);
          }
          .uc-container .cat .head .ear-container div[class^="ear"]:after {
            border-radius: 0px 40px;
            -webkit-transform: translate(-6px, 4px) rotate(19deg);
            transform: translate(-6px, 4px) rotate(19deg);
          }
          .uc-container .cat .head .ear-container .ear--left {
            -webkit-transform: translateY(-50%) rotate(-41deg)
              translate(-28px, -11px);
            transform: translateY(-50%) rotate(-41deg) translate(-28px, -11px);
          }
          .uc-container .cat .head .ear-container .ear--right {
            -webkit-transform: translateY(-50%) rotate(41deg)
              translate(28px, -11px);
            transform: translateY(-50%) rotate(41deg) translate(28px, -11px);
          }
          .uc-container .cat .head .eye-container {
            position: absolute;
            top: 25px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            height: 20px;
            width: 60%;
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
          }
          .uc-container .cat .head .eye-container div[class^="eye"] {
            position: relative;
            height: 20px;
            width: 20px;
            background: #ffffff;
            border-radius: 50%;
          }
          .uc-container .cat .head .eye-container div[class^="eye"]:after {
            content: "";
            position: absolute;
            top: 9px;
            -webkit-transform: translate(-50%);
            transform: translate(-50%);
            width: 12px;
            height: 12px;
            background: #13161a;
            border-radius: 50%;
            -webkit-animation-name: eye;
            animation-name: eye;
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-direction: alternate;
            animation-direction: alternate;
          }
          .uc-container .cat .head .nose {
            position: absolute;
            top: 52%;
            left: 50%;
            width: 12px;
            height: 9px;
            -webkit-transform: translate(-50%);
            transform: translate(-50%);
            background: #13161a;
            border-radius: 2px 2px 50% 50%;
          }
          .uc-container .cat .body {
            position: absolute;
            bottom: 0px;
            left: 50%;
            background: #ffffff;
            width: 100px;
            height: 100px;
            -webkit-transform: translate(-50%, 95px);
            transform: translate(-50%, 95px);
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border: 5px solid #13161a;
          }
          .uc-container .cat div[class^="hand"] {
            position: absolute;
            top: 100px;
            left: 50%;
            background: #ffffff;
            border: 5px solid #13161a;
            width: 30px;
            height: 120px;
            -webkit-transform-origin: center top;
            transform-origin: center top;
            z-index: -1;
            background: #13161a;
            -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
          }
          .uc-container .cat .hand--left {
            -webkit-animation-name: move-left-hand;
            animation-name: move-left-hand;
            border-radius: 30px 0px 10px 30px;
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
            -webkit-transform: translateX(-42px) rotate(80deg);
            transform: translateX(-42px) rotate(80deg);
          }
          .uc-container .cat .hand--right {
            -webkit-animation-name: move-right-hand;
            animation-name: move-right-hand;
            border-radius: 0px 30px 30px 5px;
            -webkit-transform: translateX(12px) rotate(-80deg);
            transform: translateX(12px) rotate(-80deg);
          }
          .uc-container .lap {
            position: absolute;
            width: 120px;
            height: 80px;
          }
          .uc-container .lap .lid {
            width: 100%;
            height: 100%;
            background: #e6096c;
            border: 5px solid #13161a;
          }
          .uc-container .lap .lid:before {
            position: absolute;
            content: "";
            left: 50%;
            top: 40%;
            -webkit-transform: translate(-50%);
            transform: translate(-50%);
            width: 0px;
            height: 0px;
            border-right: 10px solid transparent;
            border-top: 10px solid #e6db74;
            border-left: 10px solid #e6db74;
            border-bottom: 10px solid #e6db74;
            border-radius: 10px;
          }
          .uc-container .lap .lid:after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            width: 100%;
            height: 20px;
            background: #e6db74;
            border: 5px solid #13161a;
            bottom: 5px;
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            left: 0px;
          }
          .uc-container .lap .keyboard {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #63666b;
            border: 5px solid #13161a;
          }
          .uc-container .lap.lap--center {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }
          .uc-container .lap.lap--left {
            width: 100px;
            left: 0;
            top: 50%;
            -webkit-transform: translate(-90%, -60%) skew(0deg, 15deg);
            transform: translate(-90%, -60%) skew(0deg, 15deg);
            z-index: -1;
          }
          .uc-container .lap.lap--left .keyboard {
            border-width: 10px 10px 5px 0px;
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-transform: rotateX(70deg) skewX(-30deg)
              translate(25px, 42px);
            transform: rotateX(70deg) skewX(-30deg) translate(25px, 42px);
            z-index: -1;
          }
          .uc-container .lap.lap--right {
            width: 100px;
            right: 0;
            top: 50%;
            -webkit-transform: translate(90%, -60%) skew(0deg, -15deg);
            transform: translate(90%, -60%) skew(0deg, -15deg);
            z-index: -1;
          }
          .uc-container .lap.lap--right .keyboard {
            border-width: 10px 0px 5px 10px;
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-transform: rotateX(70deg) skewX(30deg)
              translate(-25px, 42px);
            transform: rotateX(70deg) skewX(30deg) translate(-25px, 42px);
            z-index: -1;
          }

          @media screen and (min-width: 577px) {
            .uc-container {
              transform: scale(1);
              margin: 0;
            }
          }

          @media screen and (min-width: 769px) {
            .uc-container {
              transform: scale(.8);
              margin: 0;
            }
          }

          @-webkit-keyframes move-left-hand {
            from {
              -webkit-transform: translateX(-42px) rotate(80deg);
              transform: translateX(-42px) rotate(80deg);
            }
            to {
              -webkit-transform: translateX(-42px) rotate(60deg);
              transform: translateX(-42px) rotate(60deg);
            }
          }

          @keyframes move-left-hand {
            from {
              -webkit-transform: translateX(-42px) rotate(80deg);
              transform: translateX(-42px) rotate(80deg);
            }
            to {
              -webkit-transform: translateX(-42px) rotate(60deg);
              transform: translateX(-42px) rotate(60deg);
            }
          }
          @-webkit-keyframes move-right-hand {
            from {
              -webkit-transform: translateX(12px) rotate(-80deg);
              transform: translateX(12px) rotate(-80deg);
            }
            to {
              -webkit-transform: translateX(12px) rotate(-60deg);
              transform: translateX(12px) rotate(-60deg);
            }
          }
          @keyframes move-right-hand {
            from {
              -webkit-transform: translateX(12px) rotate(-80deg);
              transform: translateX(12px) rotate(-80deg);
            }
            to {
              -webkit-transform: translateX(12px) rotate(-60deg);
              transform: translateX(12px) rotate(-60deg);
            }
          }
          @-webkit-keyframes eye {
            0% {
              left: 5px;
            }
            25% {
              left: 5px;
            }
            50% {
              left: 10px;
            }
            75% {
              left: 15px;
            }
            100% {
              left: 15px;
            }
          }
          @keyframes eye {
            0% {
              left: 5px;
            }
            25% {
              left: 5px;
            }
            50% {
              left: 10px;
            }
            75% {
              left: 15px;
            }
            100% {
              left: 15px;
            }
          }
        `}
      </style>
    </>
  );
};

export default UnderConstruction;
