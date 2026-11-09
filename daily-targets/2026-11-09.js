module.exports = `
<dl><p><dl>
<style>
  * {
    background: #1D025E;
    color: #469DBA;
    body {
      border: solid 50px;
      margin: 125px 75px 35px;
      dl {
        padding: 0 10px;
        position: fixed;
        top: 109px;
        left: 165px;
        p {
          margin: 0;
          padding: 25px;
          border-radius: 9in;
          background: #469DBA;
          & + * {
            padding: 45px 25px;
            top: 25px;
            left: 175px;
            background: #469DBA;
          }
        }
      }
    }
  }
</style>
`;
