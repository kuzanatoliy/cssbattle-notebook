module.exports = `
<dl><p>
<style>
  * {
    margin: 50px 0;
    background: #C53025;
    outline: solid var(--b, 50px) #EDDF5A;
    * {
      margin: 80px 0;
      --b: 40px;
      * {
        height: 40px;
        rotate: 90deg;
        margin: 0 100px;
        * {
          --b: 0;
          margin: 0 40px;
        }
      }
    }
  }
</style>
`;
