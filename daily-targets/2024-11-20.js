module.exports = `
<p>
<style>
  * {
    background: var(--b, #FADE8B);
    body {
      --b: #61A74E;
      scale: -1;
      margin: 50px 100px;
      clip-path: polygon(0 50%, 50% 0, 100% 0, 100% 100%, 0 100%);
      * {
        --b: #3F7331;
        margin: 0;
        height: 100px;
        width: 100px;
      }
    }
  }
</style>
`;
