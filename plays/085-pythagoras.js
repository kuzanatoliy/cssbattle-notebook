module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #D25B70);
  }
  body {
    margin: 150px;
    --b: #F7F3DA;
    height: 100px;
  }
  p {
    width: 80%;
    height: 80%;
    --b: #F6DF96;
    rotate: 37deg;
    position: relative;
    top: -96px;
    left: 52px;
  }
  p + p {
    width: 60%;
    height: 60%;
    top: -168px;
    left: -36px;
    --b: #6CB3A9;
  }
</style>
`;
