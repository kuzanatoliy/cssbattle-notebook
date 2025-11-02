module.exports = `
<p a><p><p><p><p a b>
<style>
  * {
    background: linear-gradient(90deg, #FFF 50vw, 0, #606060);
    margin: 0;
    [a] {
      box-shadow: -85px 0 #FFF, -170px 0 var(--c,), -85vh 0, -85vw 0; 
    }
    [b] {
      --c: #FFF;
    }
    p {
      color: #606060;
      height: 40px;
      width: 40px;
      border-radius: 9in;
      margin: 10px 10px 20px 350px;
      box-shadow: -85vw 0;
    }
  }
</style>
`;
