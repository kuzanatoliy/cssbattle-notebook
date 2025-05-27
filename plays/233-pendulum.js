module.exports = `
<p><p><dl><dl>
<style>
  * {
    background: #F4DA64;
    * {
      margin: 125px 100px 0;
      dl {
        position: fixed;
        background: #469DBA;
        inset: 50px 50px 75px;
        dl {
          inset: -50vh 87px 10px;
        }
      }
      p {
        margin: 0;
        border: solid 25px #469DBA;
        border-bottom: 0;
        height: 75px;
        border-radius: 9in 9in 0 0;
        & + p {
          margin: 0 25px;
          scale: -1;
          height: 50px;
        }
      }
    }
  }
</style>
`;
