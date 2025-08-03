module.exports = `
<dl><dl>
<style>
  * {
    background: #3D3824;
    * {
      background: #F7FFCF;
      border-radius: 10px;
      margin: 125px 60px 65px;
      * {
        position: relative;
        margin: 0 20px;
        height: 110px;
        top: -40px;
        * {
          top: -20px;
          --b: #86C78D 5vw, 0, #3D3824;
          height: 40px;
        }
        background: linear-gradient(var(--b, #F7FFCF 40px, 0, #86C78D));
      }
    }
  }
</style>
`;
