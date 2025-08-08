module.exports = `
<p><p a><p>
<style>
  * {
    background: #3A335A;
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        background: repeating-linear-gradient(90deg, #FADE8B 0px, #FADE8B var(--f, 5vw), 0, #3A335A var(--s, 40px));
        width: 100px;
        height: 60px;
      }
      [a] {
        height: 160px;
        width: 160px;
        --f: 70px;
        --s: 90px;
      }
    }
  }
</style>
`;
