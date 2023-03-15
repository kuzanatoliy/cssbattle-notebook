module.exports = `
<div><p><p><p t></div><div a><p><p><p></div>
<style>
  * {
    background: #191919;
  }  
  div {
    position: relative;
    margin: 85px 132px 0 132px;
    width: 120px;
    height: 100px;
    background: #4F77FF;
    border-radius: 90px 90px 15px 15px;
  }
  [a] {
    margin: 0 152px;
    width: 80px;
    height: 30px;
    border-radius: 0 0 20px 20px;
  }
  p {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 37px;
    left: 15px;
    border-radius: 50px;
  }
  p + p {
    left: 65px;
  }
  [t] {
    z-index: 1;
    height: 20px;
    width: 20px;
    top: 75px;
    left: 50px;
  }
  [a] p {
    height: 20px;
    width: 10px;
    top: 4px;
    left: 20px;
  }
  [a] p + p {
    left: 35px;
  }
  [a] p + p + p {
    left: 50px;
  }
</style>
`;
