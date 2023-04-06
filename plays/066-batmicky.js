module.exports = `
<p><div><div><div>
<style>
  * {
    background: #191919;
  }
  body {
    background: #F2AD43;
    margin: 100px 80px;
  }
  div, p {
    position: fixed;
  }
  p {
    background: #191919;
    left: 275px;
    top: 84px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -webkit-box-reflect: left 150px;
    box-shadow: -65px 110px 0 50px #191919;
  }
  div {
    width: 80px;
    height: 50px;
    left: 160px;
    top: 80px;
    border-radius: 10px;
  }
  div > div {
    background: #F2AD43;
    width: 20px;
    top: 110px;
    left: 190px;
    border-radius: 5px;
  }
  div > div > div {
    width: 10px;
    height: 10px;
    top: 105px;
    left: 205px;
    -webkit-box-reflect: left 10px;
  }
</style>
`;
