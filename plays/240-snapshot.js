module.exports = `
<p><dl><p><p>
<style>
  *, p {
    position: fixed;
    background: #558C90;
    body {
      border-radius: 40px;
    }
    * {
      background: #325853;
      inset: 42px 102px;
      p {
        background: #558C90;
        inset: 114px 0;
      }
      dl {
        inset: 94px 150px;
        border: solid #F4DA64;
        border-width: 10px 20px;
        p {
          inset: 124px 210px 124px 170px;
          -webkit-box-reflect: var(--d, right) 20px;
          & + p {
            inset: 0 190px 144px;
            --d: below;
          }
        }
      }
    }
  }
</style>
`;
