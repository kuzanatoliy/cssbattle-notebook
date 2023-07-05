module.exports = `
<p><p><p a><p b>
<style>
  * {
    background: #998235;
  }
  body {
    margin: 45px 95px;
    background: radial-gradient(#0b2429 60px,0,#FCBE5C 70px,0,#0b2429 80px,0,#FCBE5C 95px,0,#0b2429);
    border-radius: 50%;
  }
  p {
    position: absolute;
    left: 185px;
    top: 35px;
    height: 25px;
    width: 30px;
    background: #0B2429;
    -webkit-box-reflect: below 150px;
  }
  p + p {
    transform: rotate(45deg);
    left: 245px;
    top: 62px;
  }
  [a] {
    transform: rotate(-45deg);
    left: 125px;
  }
  [b] {
    transform: rotate(90deg);
    left: 270px;    
    top: 121px;
  }
</style>
`;
