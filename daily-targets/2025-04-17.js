module.exports = `
<dl><dl><dl s>
<style>
  * {
    background: #D96C7B;
    * {
      background: #FFF;
      margin: 30px 200px 150px 80px;
      border-radius: 9in 0 0;
      --l: 40px;
      padding: var(--l) 0 0 var(--l);
      dl {
        height: calc(100% - var(--l));
        margin: 0;
        transform-origin: 100% 100%;
        rotate: 90deg;
        [s] {
          position: relative;
          inset: -20px;
          --l: 20px;
        }
      }
    }
  }
</style>
`;
