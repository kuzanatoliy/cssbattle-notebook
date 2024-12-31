module.exports = `
<p><p><p><p><p><dl><p><p><p><p><p><dl><dl>
<style>
  * {
    background: var(--b, #FFF6D2);
    * {
      margin: 40px 125px;
      * {
        margin: 0;
      }
      p {
        --b: #E88933;
        border-radius: 9in;
        width: 14px;
        height: 220px;
        margin: 0 8px;
        float: left;
      }
      dl {
        position: fixed;
        height: 220px;
        rotate: 90deg;
        dl {
          --b: #67645E;
          width: 180px;
          height: 180px;
          margin: 20px -15px;
          border-radius: 20px;
          dl {
            --b: #FFF6D2;
            width: 152px;
            height: 152px;
            margin: 14px;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>
`;
