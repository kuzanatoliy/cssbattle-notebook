module.exports = `
<dl><p>
<style>
  * {
    background: var(--b, #F3AC3C);
    * {
      --b: #9F3333;
      margin: 54px 100px 46px;
      border-radius: 9in;
      padding: 17px;
      dl {
        --b: linear-gradient(90deg, #000 65px, 0, #9F3333 101px, 0, #000);
        margin: 0;
        height: 132px;
        p {
          margin: 40px 4px;
          width: 0;
          padding: 15px;
          --b: linear-gradient(30deg, #FFF 50%, 0, #000);
          -webkit-box-reflect: right 63px;
        }
      }
    }
  }
</style>
`;
