module.exports = `
<p r><p b><p>
<style>
  * {
    background: #EED9D9;
    * {
      background: none;
      margin: 90px 40px;
      [b] {
        background: #668884;
        --g: #EED9D9;
      }
      [r] {
        -webkit-box-reflect: right 80px;
      }
      p {
        position: relative;
        margin: 0;
        border: solid 30px var(--g, #668884);
        height: 60px;
        width: 60px;
        border-radius: 9in;
        float: left;
        & + p {
          margin-left: -20px;
          & + p {
            height: 120px;
            width: 30px;
            border-right: none;
            border-radius: 9in 0 0 9in;
            left: -200px;
            top: -60px;
          }
        }
      }
    }
  }
</style>
`;
