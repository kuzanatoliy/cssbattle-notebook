module.exports = `
<p a><i></i><p b><i></i><p a><i>
<style>
  * {
    background: var(--b, #62306D);
    body {
      margin: 0 50px;
    }
    p {
      display: inline-block;
      width: 100px;
      height: 100px;
      --b: #F7EC7D;
      i {
        display: block;
        padding: 30px;
        --b: #E38F66;
        border: solid 5vw #AA445F;
        border-radius: 50%;
        margin-top: -50px;
      }
    }
    [a] {
      margin-top: 200px;
    }
    [b] {
      height: 200px;
      i {
        --b: #AA445F;
        border: solid 5vw #E38F66;
      }
    }
  }
</style>
`;
