module.exports = `
<p><p>
<style>
  * {
    background: #191919;
  }
  body, p {
    border: solid 10px #5DBCF9;
    width: 50px;
    height: 50px;
    margin: 114px 166px;
  }
  p {
    position: fixed;
    left: 60px;
    bottom: 62px;
    border-radius: 50% 50% 50% 0;
    -webkit-box-reflect: left 50px;
  }
  p + p {
    bottom: -58px;
    border-radius: 0 50% 50% 50%;
  }
</style>
`;
