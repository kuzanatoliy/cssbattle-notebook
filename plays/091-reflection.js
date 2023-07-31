module.exports = `
<p><a><p><a>
<style>
  * {
    margin: 0;
    background: var(--b);
  }
  p {
    height: 50vh;
    --b: #D25B70;
  }
  a {
    display: block;
    position: relative;
    width: 200px;
    height: 100px;
    border-radius: 9in 9in 0 0;
    --b: #F6DF96;
    top: 50px;
    left: 100px;
  }
  p + p {
    scale: -1;
    --b: #6CB3A9;
  }
  p + p a {
    --b: repeating-linear-gradient(#F6DF96 0, #F6DF96 10px, #6CB3A9 10px, #6CB3A9 25px);
  }
</style>
`;
