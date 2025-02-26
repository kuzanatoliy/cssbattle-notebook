module.exports = `
<p t><p><p t><p r><p r><p r>
<style>
  * {
    background: #46BA67;
    * {
      margin: 0 50px;
      [r] {
        height: 40px;
        border-radius: 9in;
      }
      [t] {
        transform-origin: 50% 50vh;
        rotate: 180deg;
      }
      p {
        width: 40px;
        height: 130px;
        background: #4C4C6B;
        margin: 0 30px;
        float: left;
        &:nth-child(even) {
          background: #FAE29E;
        }
      }
    }
  }
</style>
`;
