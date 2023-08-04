module.exports = `
<p><p><p a>
<style>
  * {
    margin: 0;
    background: linear-gradient(90deg, #62306D 265px, 0, #F7EC7D); 
  }
  [a] {
    width: 60px;
    height: 60px;
    left: 60px;
    top: 65px;
    border-radius: 9in;
    box-shadow: 220px 0 #62306D;
  }
  p {
    position: fixed;
    top: -30px;
    left: 180px;
    width: 86px;
    height: 200px;
    background: #F7EC7D;
    border-radius: 100% 0 0;
  }
  p + p {
    scale: 1 -1;
    top: 130px;
    left: 220px;
  }
</style>
`;
