module.exports = `
<dl><dl>
<style>
  * {
    background: var(--b, #FFF);
    * {
      --b: #F3AC3C;
      margin: 125px 100px;
      height: 50px;
      rotate: 45deg;
      * {
        margin: 0;
        --b: #A3A368;
        rotate: 90deg;
        * {
          --b: #FBE18C;
          margin: 0 75px;
        }
      }
    }
  }
</style>
`;
