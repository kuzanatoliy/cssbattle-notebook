module.exports = `
<dl><p><p><dl><p><p>
<style>
  body {
    background: #222;
    dl {
      position: fixed;
      rotate: -45deg;
      left: 137px;
      top: 70px;
      p {
        background: #F2994A;
        margin: 0;
        width: 100px;
        height: 30px;
        border-radius: 10px 0 0;
        & + p {
          margin: -2px 0;
          width: 30px;
          height: 52px;
          border-radius: 0 0 5px;
        }
      }
      dl {
        rotate: 180deg;
        left: -18px;
        top: 52px;
        p {
          background: #2D9CDB;
        }
      }
    }
  }
</style>
`;
