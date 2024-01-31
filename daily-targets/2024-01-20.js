module.exports = `
<p><p>
<style>
  * {
    margin: 0;
    background: var(--b, #602820);
  }
  body {
    --b: #FAC2A8;
    margin: 70px 125px;
    border-radius: 9in 9in 60vw 60vw;
  }
  p {
    position: fixed;
    height: 50px;
    width: 80px;
    --b: #F16B4A;
    top: 145px;
    left: 160px;
    border-radius: 15px;
    & + p {
      width: 15px;
      left: 110px;
      border-radius: 15px 0 0 15px;
      -webkit-box-reflect: right 50vh;
    }
  }
</style>
`;
