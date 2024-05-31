module.exports = `
<dl><dl><dl><p>
<style>
  * {
    background: #6592CF;
    border-radius: 9in;
    margin: 0;
    * * {
      position: fixed;
      aspect-ratio: 1 / 1;
    }
    body {
      margin: 50px 100px;
      background: #243D83;
      padding: 30px;
    }
    p {
      height: 30px;
      color: #243D83;
      box-shadow: -15px -60px, 70px 25px;
    }
    dl {
      height: 140px;
      & dl {
        margin: -30px 70px;
        height: 70px;
        background: #557DBC;
        border-radius: 0 9in 0 0;
        padding: 30px 30px 0 0;
        & dl {
          margin: 0;
          height: 40px;
          background: #6592CF;
        }
      }
    }
  }
</style>
`;
