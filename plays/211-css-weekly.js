module.exports = `
<div><p a><p></div><dl><dl>
<style>
  * {
    background: #9B8170;
    body {
      scale: -1 1;
      margin: 90px 180px;
      dl {
        height: 20px;
        width: 20px;
        position: fixed;
        top: 134px;
        left: 20px;
        dl {
          width: 40px;
          top: 62px;
          left: -73px;
          rotate: 45deg;
        }
      }
      div {
        background: none;
        -webkit-box-reflect: left -40px;
        p {
          margin: 0;
          height: 40px;
          width: 40px;
          border: solid 20px #FFF;
          border-radius: var(--r, 9in 9in 0 9in);
        }
      }
      p + p {
        height: 60px;
        width: 100px;
        border-radius: 9in 9in 0 0;
        margin: -10px 0;
        position: relative;
      }
      [a] {
        margin: 0 30px;
        rotate: 45deg;
      }
    }
  }
</style>
`;
