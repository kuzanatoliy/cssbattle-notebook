module.exports = `
<p a b><p><p><p><p a>
<style>
  * {
    background: linear-gradient(90deg, #FFF 50%, 0, #606060);
    margin: 0;
    [a] {
      box-shadow: 85px 0 #606060, 170px 0 var(--c,), 85vh 0, 85vw 0; 
    }
    [b] {
      --c: #606060;
    }
    p {
      background: #606060;
      height: 40px;
      width: 40px;
      border-radius: 9in;
      margin: 10px;
      color: #FFF;
      box-shadow: 85vw 0;
      & + p {
        margin-top: 20px;
      }
    }
  }
</style>
`;
