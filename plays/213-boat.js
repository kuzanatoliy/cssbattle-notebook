module.exports = `
<p><p><p><p><p><dl>
<style>
  * {
    background: var(--b, #8AB8B6);
    margin: 0;
    dl {
      position: fixed;
      --b: #4A7D7B;
      inset: 32px 100px 68px;
      clip-path: polygon(50% 0, 100% 35%, 50% 70%, 100% 70%, 83% 100%, 17% 100%, 0 70%, 50% 70%);
    }
    p {
      --b: #EEF8FF;
      height: 200px;
      ~ p {
        height: 50px;
        width: 100px;
        border-radius: 50%;
        margin: -25px 0 0;
        float: left;
      }
    }
  }
</style>
`;
