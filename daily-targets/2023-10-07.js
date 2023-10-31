module.exports = `
<p><a><p><a>
<style>
  * {
    margin: 0;
    position: fixed;
    background: #A9C482;
    color: #2D696F;
  }
  p {
    width: 80px;
    height: 170px;
    left: 60px;
    bottom: 0;
    border-left: solid 40px;
  }
  a {
    display: block;
    position: relative;
    height: 50px;
    width: 80px;
    left: -40px;
    bottom: 90px;
    border: solid 40px;
    border-bottom: none;
    border-radius: 9in 9in 0 0;
  }
  p + p {
    scale: -1;
    left: 220px;
    top: 0;
  }
</style>
`;
