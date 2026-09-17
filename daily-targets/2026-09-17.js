module.exports = `
<p b><p a><p a><p>
<style>
  * * {
    background: #7EC3E8;
    margin: 40px 90px;
    [a] {
      background: #7EC3E8;
      border-inline: solid 10px #333;
    }
    [b] {
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }
    p {
      background: #333;
      height: 100px;
      margin: 0 10px;
      & + p {
        float: left;
        padding: 10px;
        height: 60px;
        margin: 0 5px 0 45px;
        & + p + p {
          margin: 0;
          padding: 20px 110px;
          height: 0;
        }
      }
    }
  }
</style>
`;
