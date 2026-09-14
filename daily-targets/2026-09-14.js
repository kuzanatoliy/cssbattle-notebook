module.exports = `
<dl><dl></dl><dl></dl><p><p>
<style>
  * * {
    background: #F8B140;
    margin: 55px 105px;
    position: relative;
    p {
      position: fixed;
      inset: 55px 80px;
      background: #465792;
      & + p {
        rotate: 90deg;
      }
    }
    dl {
      height: 190px;
      margin: 0;
      border-radius: 9in;
      overflow: hidden;
      dl {
        border: solid 10px #465792;
        height: 50px;
        width: 50px;
        top: -35px;
        left: 60px;
        -webkit-box-reflect: var(--d, below) 30vw;
        & + dl {
          left: -35px;
          top: -10px;
          --d: right;
        }
      }
    }
  }
</style>
`;
