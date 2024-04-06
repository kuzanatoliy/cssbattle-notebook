module.exports = `
<dl><dl><dl>
<style>
  * {
    background: var(--b, #998235);
    * {
      --b: #FCBE5C;
      margin: 60px 110px;
      border-radius: 9in;
      padding: 20px 10px 20px 30px;
    }
    dl {
      margin: 0;
      --b: #0B2429;
      height: calc(100% - 40px);
      scale: -1;
      & dl {
        --b: #FCBE5C;
        & dl {
          --b: #998235;
        }
      }
    }
  }
</style>
`;
