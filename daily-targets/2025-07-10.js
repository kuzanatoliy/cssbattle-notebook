module.exports = `
<p><p><p><p><p><dl>
<style>
  * {
    background: #7AA70A;
    * {
      margin: 40px 115px;
      p, dl {
        margin: 0;
        color: #FFF;
        background: #FFF;
        padding: 20px 85px;
        border-radius: 9in 9in 0 0;
        float: left;
        & + p {
          padding: 40px 20px;
          border-radius: 0 0 0 30px;
          & + p {
            padding: 20px 30px;
            border-radius: 0;
            margin: 40px 0 0 0;
            & + p {
              background: #7AA70A;
              padding: 30px 15px;
              border: solid 40px;
              border-left: none;
              border-radius: 0 9in 9in 0;
              & + dl {
                background: #7AA70A;
                padding: 20px 50px;
                margin: 0;
                border-radius: 0 0 0 9in;
                box-shadow: -70px -40px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
