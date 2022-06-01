module.exports = `
<p t1><p t2>
<style>
  body {
    background: #F2F2B6;
  }
  p {
    margin: 0;
    height: 0;
    width: 0;
    position: absolute;
    border: solid 75px rgba(0,0,0,0);
  }
  [t1] {
    top: 85px;
    left: 60px;
    border-top: solid 130px #FF6D00;
    filter: drop-shadow(20px 0px #FD4602);
  }
  [t2] {
    bottom: 85px;
    right: 80px;
    border-bottom: solid 130px #FD4602;
    filter: drop-shadow(20px 0px #FF6D00);
  }
</style>
`;
