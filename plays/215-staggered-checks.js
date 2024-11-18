module.exports = `
<p><p><p><p><p><p c><p a><p a><p d><p b><p d>
<style>
  * {
    background: #F8F8F8;
    * {
      margin: 10px 20px;
      * {
        margin: 10px;
        background: #787885;
        float: left;
        height: 50px;
        width: 40px;
      }
      [c] ~ p {
        height: 10px;
      }
      [a] {
        width: 340px;
        margin: 0 10px 15px;
        ~ p {
          margin: 5px 10px;
        }
      }
      [d] {
        width: 74px;
        color: #787885;
        box-shadow: 0 5vw, 0 10vw, 0 15vw, 0 20vw, 0 25vw, 0 30vw, 0 35vw;
      }
      p[b] {
        height: 150px;
        width: 172px;
        margin: 5px 0;
      }
    }
  }
</style>
`;
