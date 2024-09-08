module.exports = `
<dl><p s><p r><p><p l>
<style>
  * {
    color: #BB2726;
    background: #BB2726;
    body {
      margin: 0 92px 15px;
    }
    dl {
      overflow: hidden;
      margin: 0;
    }
    * {
      background: #F3AC3C;
    }
    p {
      border: solid 10px;
      border-top: 0;
      height: 122px;
      margin: 0 25px;
    }
    p + p {
      height: 119px;
      width: 110px;
      border-radius: 0 0 0 98px;
      margin: 24px -70px 0;
      float: left;
      scale: -1;
    }
    p + p + p {
      border-radius: 0;
      width: 96px;
      height: 37px;
      margin: 106px 50px 0;
    }
    [r] {
      -webkit-box-reflect: left 96px;
    }
    [s] {
      box-shadow: -50.5px 70.5px 0 -60.5px #fff, 50.5px 70.5px 0 -60.5px #fff, -50.5px 70.5px 0 -50.5px, 50.5px 70.5px 0 -50.5px;
    }
    [l] {
      position: fixed;
      background: #BB2726;
      top: 0;
      margin: 0 68px;
      width: 60px;
      height: 55px;
    }
  }
</style>
`;
