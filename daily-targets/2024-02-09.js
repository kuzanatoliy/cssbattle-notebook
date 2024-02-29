module.exports = `
<p><p><p>
<style>
  * {
    background: #1E1D50;
  }
  body {
    background: #EEECF6;
    margin: 80px 150px;
    border-radius: 9in;
    outline: solid 20px #EEECF6;
    outline-offset: 20px;
  }
  p {
    position: fixed;
    height: 20px;
    width: 50px;
    margin: 40px 0;
    & + p {
      margin: 80px 0;
      & + p {
        height: 160px;
        width: 20px;
        margin: 100px 40px;
        background: #EEECF6;
      }
    }
  }
</style>
`;
