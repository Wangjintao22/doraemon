const string = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::after,
  *::before {
    box-sizing: border-box;
  }
  ul,
  li {
    list-style: none;
  }
  .doraemon {
    width: 500px;
    height: 610px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  @media (max-width: 500px) {
    .doraemon {
      left: -48px;
    }
  }
  .head {
    border: 2px solid black;
    background-color: #0097e3;
    height: 358px;
    width: 384px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    margin: auto;
    overflow: hidden;
    z-index: 5;
  }
  .eyeWrap {
    width: 88px;
    height: 108px;
    position: absolute;
  }
  .eyeWrap.left {
    left: 72px;
    top: 36px;
  }
  .eyeWrap.right {
    left: 158px;
    top: 42px;
  }
  .eye {
    border: 2px solid black;
    background-color: #fff;
    width: 88px;
    height: 108px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 8;
    animation: eye-close 5s infinite;
  }
  @keyframes eye-close {
    0%,
    3%,
    6%,
    100% {
      height: 100%;
    }
    1.5%,
    4.5% {
      height: 5%;
    }
  }
  .pupil {
    background-color: black;
    width: 25px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .pupil::before {
    content: "";
    display: block;
    background-color: #fff;
    height: 14px;
    width: 7px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .nose {
    border: 2px solid black;
    background-color: #e40224;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    left: 115px;
    top: 125px;
    z-index: 9;
  }
  .nose::before {
    content: "";
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fff;
    left: 12px;
    top: 12px;
  }
  .mouth {
    border: 2px solid black;
    background-color: #fff;
    height: 280px;
    width: 340px;
    border-radius: 50%;
    position: absolute;
    top: 85px;
    left: 7px;
    transform: rotate(5deg);
    overflow: hidden;
  }
  .lips {
    border: 2px solid black;
    width: 280px;
    height: 196px;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 4px;
    transform: rotate(-10deg);
  }
  .lips::before {
    content: "";
    display: block;
    position: absolute;
    width: 284px;
    height: 100px;
    background-color: #fff;
    left: -2px;
    top: -2px;
  }
  .smile {
    border: 2px solid black;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border-top-color: transparent;
    border-left-color: transparent;
    position: absolute;
    top: 106px;
    left: 8px;
    transform: rotate(196deg);
  }
  .lips-up {
    border: 2px solid black;
    position: absolute;
    left: 130px;
    top: 78px;
    height: 132px;
    width: 30px;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  .mustache {
    position: absolute;
    z-index: 3;
  }
  .mustache li {
    width: 90px;
    height: 5px;
    background-color: #000;
    position: relative;
  }
  .mustache1 {
    transform: rotate(15deg);
    top: -28px;
  }
  .mustache3 {
    transform: rotate(-15deg);
    top: 28px;
  }
  .mustache.left {
    transform: rotate(15deg);
    top: 165px;
    left: -5px;
  }
  .mustache.right {
    transform: scaleX(-1.4) rotate(0deg);
    top: 188px;
    right: 64px;
  }
  
  .scarf {
    border: 2px solid black;
    background-color: #d9011a;
    width: 250px;
    height: 76px;
    border-radius: 50%;
    position: absolute;
    transform: rotate(5deg);
    top: 312px;
    left: 110px;
    z-index: 3;
  }
  .bell {
    border: 2px solid black;
    height: 56px;
    width: 56px;
    background-color: #f5cc07;
    border-radius: 50%;
    position: absolute;
    top: 375px;
    left: 164px;
    transform: rotate(5deg);
    overflow: hidden;
    z-index: 3;
  }
  .bell-line1 {
    border: 2px solid black;
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    left: -38px;
    top: 20px;
  }
  .bell-line2 {
    border: 2px solid black;
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    left: -38px;
    top: 12px;
  }
  .bell-line3 {
    border: 2px solid black;
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(-60deg);
    left: 18px;
    top: 2px;
  }
  .bell-hole {
    border: 2px solid black;
    width: 22px;
    height: 12px;
    border-radius: 50%;
    background-color: #665a4c;
    position: absolute;
    top: 30px;
    left: 12px;
  }
  .body {
    height: 300px;
    width: 250px;
    position: absolute;
    left: 110px;
    top: 300px;
    z-index: 1;
  }
  .armRight {
    border: 2px solid black;
    background-color: #0097e3;
    width: 70px;
    height: 120px;
    border-radius: 40%;
    position: absolute;
    right: -50px;
    top: 55px;
    transform: rotate(-30deg);
    z-index: 1;
  }
  .armRight::after {
    display: block;
    content: "";
    background-color: #0097e3;
    width: 50px;
    height: 55px;
    position: absolute;
    left: -10px;
    transform: rotate(30deg);
    z-index: 3;
  }
  .armRight::before {
    display: block;
    content: "";
    position: absolute;
    width: 40px;
    height: 95px;
    background-color: #0097e3;
    border-radius: 50%;
    border: 2px solid #000;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(-7deg);
    top: 6px;
    left: -12px;
  }
  .handRight {
    border: 2px solid #000;
    background-color: #fff;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: 136px;
    left: 268px;
  }
  .armLeft {
    border: 2px solid #000;
    background-color: #0097e3;
    width: 45px;
    height: 65px;
    border-radius: 50%;
    position: absolute;
    top: 38px;
    left: -20px;
    transform: rotate(15deg);
    background-color: #0097e3;
    z-index: -2;
  }
  .handLeft {
    border: 2px solid #000;
    background-color: #fff;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    position: absolute;
    top: 90px;
    left: -30px;
    z-index: -1;
  }
  .pocket {
    border: 2px solid #000;
    background-color: #fff;
    width: 176px;
    height: 144px;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 56px;
    transform: rotate(15deg);
    overflow: hidden;
    z-index: 1;
  }
  .pocketLine {
    border: 2px solid #000;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
  }
  .pocketLine::before {
    content: "";
    display: block;
    position: absolute;
    left: -22px;
    border: 2px solid #000;
    min-width: 185px;
    transform: rotate(-10deg);
    min-height: 75px;
    padding: 0.5em;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    background-color: #fff;
  }
  .trunk {
    border: 2px solid #000;
    background-color: #0097e3;
    width: 250px;
    height: 280px;
    border-radius: 50%;
    position: absolute;
    top: -36px;
    left: -5px;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  .trunk::after {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background-color: #0097e3;
    position: absolute;
    top: 78px;
    left: 0;
    z-index: 3;
  }
  .legRight {
    border: 2px solid #000;
    background-color: #0097e3;
    width: 75px;
    height: 160px;
    border-radius: 50%;
    position: absolute;
    left: 168px;
    top: 115px;
    border-left-color: transparent;
    border-top-color: transparent;
    transform: rotate(20deg);
  }
  .body::before {
    content: "";
    display: block;
    position: absolute;
    border: 2px solid #000;
    background-color: #0097e3;
    width: 30px;
    height: 30px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(-15deg);
    top: 162px;
    left: 168px;
    z-index: 10;
  }
  .footRight {
    border: 2px solid #000;
    background-color: #fff;
    width: 125px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    left: 86px;
    top: 156px;
    transform: rotate(-40deg);
    z-index: 10;
  }
  .legLeft:before {
    display: block;
    content: "";
    min-width: 45px;
    min-height: 45px;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    left: -16px;
    top: -8px;
    background-color: #0097e3;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  .legLeft {
    border: 2px solid #000;
    width: 120px;
    height: 110px;
    background-color: #0097e3;
    position: absolute;
    left: -12px;
    top: 144px;
    border-top-color: transparent;
  }
  .trunk::before {
    display: block;
    content: "";
    min-width: 150px;
    min-height: 150px;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: #fc3;
    position: absolute;
    top: 268px;
    left: -11px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    z-index: 3;
  }
  .footLeft {
    border: 2px solid #000;
    background-color: #fff;
    width: 105px;
    height: 160px;
    border-radius: 50%;
    position: absolute;
    top: 126px;
    left: -84px;
    transform: rotate(-30deg);
    z-index: 10;
  }
</style
`
export default string