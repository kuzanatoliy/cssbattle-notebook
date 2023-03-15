module.exports = `
<p><p><p>
<style>
  * {
    background: #191919;
  }  
  body {
    width: 150px;
    height: 150px;
    background: #4F77FF;
    border-radius: 50%;
    margin: 75px 125px;
  }
  :before,:after {
    content: '';
    position: absolute;
    z-index: 1;
  }
  body:before {
    width: 210px;
    height: 210px;
    border: 10px solid #191919;
    border-radius: 50%;
    top: 45px;
    right: 35px;
    box-sizing: border-box;
    -webkit-box-reflect: left -90px;
  }
  body:after {
    width: 10px;
    height: 100%;
    left: 195px;
    background: #191919;
    margin-top: -100px;
  }
  p {
    height: 10px;
    position: relative;
    top: 30px;
  }
  p + p {
    top: 44px;
  }
  p + p + p {
    top: 58px;
  }
</style>
`;
