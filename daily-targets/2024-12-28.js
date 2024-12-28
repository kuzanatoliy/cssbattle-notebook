module.exports = `
<p b><p a><p b c>
<style>
  * {
    background: var(--b, #3F4869);
    * {
      margin: 60px 110px;
      p {
        margin: 0;
        height: 60px;
        --b: #EA9A52;
      }
      p + p + p {
        --b: #AA3440;
      }
      [a] {
        width: 60px;
        --b: #61A74E;
      }
      [b] {
        border-radius: 5vw 5vw 5vw 0;
      }
      [c] {
        scale: 1 -1;
      }
    }
  }
</style>
`;
