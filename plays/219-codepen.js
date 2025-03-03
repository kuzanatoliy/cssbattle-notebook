module.exports = `
<p><dl></dl><dl>
<style>
  body {
    color: #FFF;
    background: #101724;
    margin: 0;
    p {
      height: 70px;
      width: 19px;
      box-shadow: 93px 114px, 288px 114px, 190.3px 54px, 190.3px 184px;
    }
    dl {
      width: 95px;
      height: 95px;
      border: solid 17px #FFF;
      transform: skew(10deg, 10deg);
      rotate: -45deg;
      margin: -35px 135px;
      + dl {
        margin-top: -59px;
      }
    }
  }
</style>
`;
