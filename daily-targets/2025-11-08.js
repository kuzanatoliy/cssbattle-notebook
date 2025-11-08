module.exports = `
<p><p><dl><p>
<style>
  * {
    background: #FFE5AC;
    * {
      margin: 85px 140px;
      border-radius: 9in;
      p {
        background: #313131;
        padding: 25px;
        margin: 0;
        & + p {
          margin-top: 30px;
          & + dl {
            position: fixed;
            padding: 10px;
            border-radius: 9in 9in 0 0;
            top: 10px;
            left: 0;
            -webkit-box-reflect: right 5vw;
            p {
              padding: 15px;
            }
          }
        }
      }
    }
  }
</style>
`;
