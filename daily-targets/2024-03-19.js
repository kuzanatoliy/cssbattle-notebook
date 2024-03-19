module.exports = `
<p><dl>
<style>
  * {
    background: var(--b, #E0DBF0);
    position: relative;
    margin: 0;
    body {
      --b: #857DA1;
      margin: 60px 275px 60px 100px;
      -webkit-box-reflect: right 150px;
    }
    p {
      top: 10px;
      height: 10px;
      --b: linear-gradient(90deg,#E0DBF0 10px, 0, #857DA1 5vh, 0, #E0DBF0);
      -webkit-box-reflect: below 35vw;
    }
    dl {
      width: 70px;
      height: 100px;
      left: 25px;
      top: 30px;
      --b: linear-gradient(90deg,#BBB2DB 50px, 0, #E0DBF0 60px, 0, #BBB2DB);
    }
  }
</style>
`;
