module.exports = `
<dl><p></dl><dl><p>
<style>
  * {
    background: #2F5A76;
    body {
      background: #F5BB60;
      margin: 110px 190px 110px 180px;
      height: 80px;
      rotate: -40deg;
    }
    dl {
      position: relative;
      height: 30px;
      width: 50px;
      top: -52px;
      border: solid 30px #F5BB60;
      border-bottom: 0;
      border-radius: 9in 9in 0 0;
      p {
        height: 30px;
        width: 30px;
        background: #F5BB60;
        border-radius: 9in;
        margin: 10px 0 0 50px;
      }
      & + dl {
        top: -58px;
        transform-origin: 5vh 100%;
        rotate: 180deg;
      }
    }
  }
</style>
`;
