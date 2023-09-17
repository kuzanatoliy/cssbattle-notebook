module.exports = `
<p><p>
<style>
  * {
    background: #F5BE6C;
  }
  body {
    background: #B74838;
    -webkit-box-reflect: right 30px;
  }
  * * {
    margin: 75px 216px 60px 70px;
    border-radius: var(--b, 0 0 var(--r, 65px) 0);
  }
  p {
    margin: 0;
    width: 84px;
    height: 135px;
    --r: 35px;
  }
  p + p {
    width: 30px;
    height: 30px;
    --b: 9in;
    margin-left: -16px;
    background: #B74838;
    box-shadow: 100px -150px #B74838;
  }
</style>
`;
