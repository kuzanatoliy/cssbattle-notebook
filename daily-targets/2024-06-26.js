module.exports = `
<p><p><dl><p><p><div>
<style>
  * {
    background: var(--b, #024817);
    margin: 0;
    body, dl, div {
      position: fixed;
      inset: 80px 130px;
      --b: none;
    }
    div {
      --b: #48BF7D;
      inset: 40px;
    }
    div, p {
      border-radius: 9in;
    }
    dl {
      rotate: 45deg;
      & p {
        --b: #176C36;
      }
    }
    p {
      height: 40px;
      width: 40px;
      --b: #48BF7D;
      -webkit-box-reflect: right 60px;
    }
    p + p {
      margin-top: 60px;
    }
  }
</style>
`;
