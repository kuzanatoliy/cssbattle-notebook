module.exports = `
<dl><p><p>
<style>
  * {
    color: #3F4869;
    background: conic-gradient(#F4DA64 225deg, #3F4869 225deg 315deg, #F4DA64 315deg);
    margin: -122px -72px;
    border: solid var(--o, 2in);
    border-radius: 9in;
    * {
      background: #F4DA64;
      margin: 20px;
      --o: 5vw;
      dl {
        background: none;
        position: fixed;
        --o: none;
        inset: 30vw 10vw;
        p {
          float: left;
          padding: 10px 40px;
          border-radius: 0;
          --o: 0;
          margin: 0 40px;
          & + p {
            padding: 10px 20px;
          }
        }
      }
    }
  }
</style>
`;
