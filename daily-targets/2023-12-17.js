module.exports = `
<p><p><p>
<style>
  * {
    background: #004928;
  }
  body {
    margin: 75px;
  }
  p {
    margin: 25px 25px 0 0;
    height: 100px;
    width: 150px;
    float: right;
    outline: solid 25px #E5EDE9;
    & + p {
      height: 25px;
      width: 25px;
      & + p {
        height: 50px;
      }
    }
  }
</style>
`;
