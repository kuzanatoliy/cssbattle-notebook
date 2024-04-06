module.exports = `
<p><p a><p>
<style>
  * {
    background: var(--b, #998235);
    margin: 0;
    body {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      gap: 4px;
    }
    p {
      height: 230px;
      width: 40px;
      --b: #0B2429;
    }
    [a] {
      --b: #FCBE5C;
      height: 160px;
      margin-top: 70px;
      transform: skewX(20deg);
      width: 42px;
      & + p {
        rotate: 180deg;
        transform-origin: 50% 50vh;
      }
    }
  }
</style>
`;
