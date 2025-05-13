module.exports = `
<p>
<style>
  html, body {
    background: conic-gradient(#F4DA64 225deg, #3F4869 225deg 315deg, #F4DA64 315deg);
    margin: -122px -72px;
    border: solid var(--o, 2in) #3F4869;
    border-radius: 9in;
    * {
      background: #F4DA64;
      margin: 20px;
      --o: 5vw;
      p {
        position: fixed;
        inset: 30vw 20vw;
        background: linear-gradient(90deg, #F4DA64 50%, 0, transparent 80%, 0, #F4DA64);
      }
    }
  }
</style>
`;
