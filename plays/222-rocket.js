module.exports = `
<p><p a><dl>
<style>
  * {
    background: var(--b, #B0E1FB);
    margin: 0;
    * {
      p, dl {
        --b: #4B4D88;
      }
      p {
        height: 60px;
        width: 130px;
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
        margin: 110px 135px 0;
        & + p {
          --b: #C15965;
          margin-top: 30px;
          & + dl {
            position: fixed;
            inset: 40px 55vh 60px;
            border-radius: 9in;
            border: solid 10px #B0E1FB;
          }
        }
      }
    }
  }
</style>
`;
