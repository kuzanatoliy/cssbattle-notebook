module.exports = `
<div><p><p><p>
<style>
  * {
    border-radius: 9in;
    border: solid var(--b);
    margin: 0;
  }
  body {
    background: #161616;
    margin: 50px 100px;
  }
  div {
    height: 190px;
    background: radial-gradient(#000 25px,0,#E96A23 35px,0,#000 50px,0,#A22015 95px,0,#000);
    overflow: hidden;
    --b: 5px;
  }
  p {
    position: relative;
    height: 70px;
    width: 70px;
    --b: 15px;
    left: -28px;
    top: 3px;
  }
  p + p {
    left: 119px;
    top: -96px;
  }
  p + p + p {
    left: 45px;
    top: -68px;
  }
</style>
`;
