module.exports = `
<p><p><div><p><p><hr></div><p a><p a>
<style>
  * {
    background: #191919;
    margin: 0;
  }
  body {
    margin: 66px 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  p {
    width: 30px;
    height: 20px;
    border: solid 10px #5DBCF9;
  }
  p + p {
    width: 80px;
    height: 50px;
    margin-top: -10px;
    border-bottom: none;
  }
  div > p {
    background: none;
    transform: rotate(30deg);
    margin: -10 0 0 55px;
    width: 80px;
    height: 40px;
    border-left: 0px;
    border-bottom: 0px;
  }
  div > p + p {
    transform: rotate(-30deg)  scaleX(-1);
    margin: -51px 0 0 1px;
    width: 80px;
    height: 40px;
    border-left: 0px;
    border-bottom: 0px;
  }
  hr {
    border: solid 5.5px #5DBCF9;
    transform: rotate(90deg);
    margin-top: 5px;
    width: 50%;
    margin: -25px 31px;
  }
  [a] {
    border: none;
    background: red;
    margin-top: 38px;
    background: #5DBCF9;
    height: 10px;
    border: solid 10px #191919;
    width: 100%;
    z-index: 1;
  }
  [a] + [a] {
    margin-top: -10px;
    width: 55%;
  }
</style>
`;
