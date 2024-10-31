module.exports = `
<p><p>
<style>
  * {
    background: #328FC1;
    margin: 0;
    p {
      position: fixed;
      background: radial-gradient(circle at 50% 100%, #EEB850 45px, 0, #243D83);
      width: 90px;
      height: 90px;
      margin: 15px 155px;
      -webkit-box-reflect: below 90px;
    }
    p + p {
      rotate: -90deg;
      transform-origin: 50% 45vh;
    }
  }
</style>
`;
