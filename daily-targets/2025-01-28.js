module.exports = `
<p><p a><p>
<style>
  * {
    background: var(--b, #2D3464);
    margin: 0;
    p {
      --b: #D08825;
      height: 85px;
      width: 141px;
      -webkit-box-reflect: right var(--r, 118px);
    }
    [a] {
      --b: #FADE8B;
      height: 130px;
      width: 130px;
      --r: 70px;
    }
  }
</style>
`;
