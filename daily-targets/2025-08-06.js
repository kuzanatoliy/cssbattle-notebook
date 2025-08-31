module.exports = `
<dl><p><p>
<style>
  * {
    background: #88EBF8;
    position: fixed;
    body, dl {
      border: solid 5vw #23384B;
      border-radius: 9in;
      margin: 35px 146px 195px 186px;
      padding: 15px;
      dl {
        margin: 125px -77px;
        p {
          margin: 0;
          outline: solid 5vw #23384B;
          inset: 0 70vh 40vw 0;
          & + p {
            inset: 40vw 0 0 70vh;
          }
        }
      }
    }
  }
</style>
`;
