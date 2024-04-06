module.exports = `
<p a><p s><p c><p s r><p a r>
<style>
  * {
    background: var(--b, #4F77FF);
    margin: 0;
    body {
      margin: 70px 80px;
    }
    p {
      height: 20px;
      --b: #FFF;
    }
    [a] {
      border-radius: 10px 10px 10px 0;
      height: 50px;
      box-shadow: 5vw -5vw #1038BF;
    }
    [r] {
      scale: -1;
    }
    [c] {
      border-radius: 0 10px;
    }
    [s] {
      box-shadow: inset -55vw 0 #4F77FF;
    }
  }
</style>
`;
