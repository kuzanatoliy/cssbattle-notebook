module.exports = `
<p a><p><p><p a>
<style>
  * {
    background: #FADE8B;
    * {
      background: #D86F45;
      margin: 50px 100px;
      box-shadow: inset 0 0 0 var(--w, 50px) #FADE8B; 
    }
    p {
      float: left;
      width: 100px;
      height: 100px;
      float: left;
      margin: 0;
      border-radius: 9in;
    }
    [a] {
      --w: 20px;
    }
  }
</style>
`;
