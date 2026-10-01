module.exports = `
<p><p><p o><p><p>
<style>
  * * {
    background: #D5A06C;
    margin: 40px 110px;
    [o] {
      outline: solid 10px #D5A06C;
    }
    p {
      float: left;
      border: solid 5vw #1E2C5C;
      padding: 10px;
      border-radius: 9in;
      margin: 0;
      & + p {
        margin: 0 0 0 60px;
        & + p {
          margin: -40px 0;
          padding: 70px;
          & + p {
            padding: 15px 0;
            border-width: 10px;
            border-radius: 0;
            margin: 10px 30px;
            rotate: 45deg;
            & + p {
              rotate: -45deg;
              margin-left: 50px;
            }
          }
        }
      }
    }
  }
</style>
`;
