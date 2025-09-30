module.exports = `
<p><p><dl><p>
<style>
  * {
    background: #30383F;
    * {
      background: #5AA4B7;
      border-radius: 9in;
      margin: 100px 150px;
      * {
        position: fixed;
      }
      p {
        margin: 20px;
        background: #FFF;
        padding: 30px;
        & + p {
          margin: 32px -40px;
          padding: 18px 90px;
          & + dl {
            margin: 0 -100px;
            padding: 50px;
            -webkit-box-reflect: right 25vw;
            p {
              padding: 18px 90px;
              margin: -18px -162px;
            }
          }
        }
      }
    }
  }
</style>
`;
