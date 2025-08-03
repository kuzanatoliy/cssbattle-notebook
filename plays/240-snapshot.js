module.exports = `
<p><dl><p><p>
<style>
  *, p {
    position: fixed;
    background: var(--b, #558C90);
    body {
      border-radius: 42q;
    }
    * {
      --b: #325853;
      inset: 44q 108q;
      p {
        --b: #558C90;
        inset: 121q 0;
      }
      dl {
        inset: 99q 159q;
        border: solid #F4DA64;
        border-width: 10px 20px;
        p {
          inset: 131q 222q 131q 180q;
          -webkit-box-reflect: var(--d, right) 5vw;
          & + p {
            inset: 0 201q 152q;
            --d: below;
          }
        }
      }
    }
  }
</style>
`;
