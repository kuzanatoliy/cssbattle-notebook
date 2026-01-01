module.exports = `
<dl><dl>
<style>
  * {
    background: var(--b, #F7CB71);
    color: var(--b);
    * {
      --b: #7C3219;
      margin: 130px 200px 130px 40px;
      rotate: 45deg;
      box-shadow: 120q -120q;
      * {
        margin: 0;
        rotate: 90deg;
        height: 40px;
        box-shadow: -120q -120q;
        * {
          --b: #F7CB71;
          margin: 0 60px;
          box-shadow: -120q 120q;
        }
      }
    }
  }
</style>
`;
