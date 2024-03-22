module.exports = `
<dl><p><p>
<style>
  * {
    color: #000;
    background: #000;
    border-radius: 5vw;
    margin: 0;
  }
  body {
    background: #37385A;
    margin: 90px 80px;
  }
  dl {
    position: relative;
    height: 80px;
    width: 200px;
    border-radius: 10px;
    inset: 5vw;
    background: linear-gradient(105deg, #9897AE 38%, 0, #C0C3DB 62%, 0, #9897AE);
  }
  p {
    position: fixed;
    width: 10px;
    height: 50px;
    left: 165px;
    top: 125px;
    box-shadow: 5vw 0, 10vw 0, 15vw 0;
  }
  p + p {
    left: 115px;
    height: 10px;
    box-shadow: 0 5vw, 0 10vw;
    -webkit-box-reflect: right 50vh;
  }
</style>
`;
