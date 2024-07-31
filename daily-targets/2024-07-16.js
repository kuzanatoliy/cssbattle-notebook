module.exports = `
<p><p>
<style>
  * {
    background: #4F77FF;
    margin: 0;
    p {
      background: #EFF8FE;
      height: 100px;
      width: 100px;
      border-radius: 0 0 40px;
      -webkit-box-reflect: right 50vw;
    }
    p + p {
      margin-top: 100px;
      scale: 1 -1;
    }
  }
</style>
`;
