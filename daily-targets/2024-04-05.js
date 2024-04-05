module.exports = `
<dl><p><dl><p><dl><p><dl><p>
<style>
  * {
    background: #631E1D;
    margin: 0;
    body {
      margin: 30px 80px;
      background: #F16B4A;
      box-shadow: inset 0 0 0 35vh #631E1D;
      color: #F16B4A;
    }
    dl {
      position: fixed;
      top: 30px;
      left: 80px;
      height: 120px;
      width: 60px;
      box-shadow: 7.5px 7.5px 0 7.5px;
      rotate: 90deg;
      transform-origin: 40vh 40vh;
      & dl {
        transform-origin: 95px 65px;
      }
    }
    p {
      height: 75px;
      box-shadow: 0 15px;
    }
  }
</style>
`;
