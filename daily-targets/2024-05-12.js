module.exports = `
<dl><p b><p>
<style>
  * {
    background: #FFFFCD;
    margin: 0;
    body, p + p {
      border: solid 5vw #E78320;
      border-radius: 9in;
    }
    body {
      margin: 110px 160px;
      border: solid 5vw #E78320;
      border-bottom: 0;
      border-radius: 9in 9in 0 0;
      height: 20px;
    }
    dl {
      background: none;
      position: fixed;
      inset: 90px 0;
      width: 180px;
      -webkit-box-reflect: right 40px;
    }
    p {
      float: left;
      height: 20px;
      width: 70px;
    }
    p + p {
      width: 80px;
      height: 80px;
      margin-left: -10px;
    }
    [b] {
      background: #E78320;
      margin: 50px 0;
    }
  }
</style>
`;
