module.exports = `
<p><p>
<style>
  * {
    background: #0A6190;
    body {
      background: #328FC1;
      margin: 100px -25px;
    }
    p {
      float: left;
      height: 100px;
      width: 150px;
      margin: 0;
      clip-path: polygon(0 0, 100% 0, 67% 100%, 33% 100%);
    }
    p + p {
      margin-left: 150px;
      scale: -1;
    }
  }
</style>
`;
