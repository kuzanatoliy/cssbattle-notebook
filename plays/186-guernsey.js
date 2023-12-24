module.exports = `
<dl><dl><dl><p><p><dl><p><p>
<style>
  * {
    margin: 0;
    position: relative;
  }
  dl {
    height: 80px;
    margin: 110px 0;
    background: #E8112D
  }
  dl dl {
    rotate: 90deg;
    & p, & dl {
      background: #F9DD16;
    }
    & dl {
      height: 20px;
      width: 230px;
      margin: 0 85px;
      top: 30px;
      & p {
        background: #F9DD16;
        width: 30px;
        height: 40px;
        top: -10px;
        clip-path: polygon(0 0, 0 100%, 100% 50%);
        float: left;
        & + p {
          scale: -1;
          left: 170px;
        }
      }
      & dl {
        top: 0;
        left: -85px;
      }
    }
  }
</style>
`;
