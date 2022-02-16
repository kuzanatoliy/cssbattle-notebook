module.exports = `
<div id='l'></div><div id='c'></div><div id='r'></div>
<style>
  body {
    background: #191210;
    position: relative;
    margin: 0;
  }
  div {
    position: absolute;
  }
  #c {
    top: 100px;
    left: 150px;
    width: 50px;
    height: 50px;
    background: #84271C;
    border-radius: 50%;
    border: solid #191210 25px;
    box-shadow: 0 0 0 20px #ECA03D;
  }
  #l, #r {
    width: 60px;
    height: 30px;
    border-radius: 50px 50px 0 0;
    border: solid #ECA03D 20px;
    border-bottom: 0;
  }
  #l {
    top: 150px;
    transform: rotate(180deg);
    left: 50px;
  }
  #r {
    top: 100px;
    left: 250px;
  }
</style>
`;
