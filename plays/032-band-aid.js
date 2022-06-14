module.exports = `
<p><p>
<style>
  * {
    margin: 0;
  }
  p {
    position: fixed;
    width: 200px;
    height: 50px;
    background: #F3AC3C;
    top: 125px;
    left: 100px;
    transform: rotate(45deg);
  }
  p + p {
    transform: rotate(-45deg);
    background: #FBE18C;
    box-shadow: inset 75px 0 #A3A368, inset -75px 0 #A3A368;
  }
</style>
`;
