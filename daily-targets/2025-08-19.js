module.exports = `
<p a><p b><p><p b><p a><dl>
<style>
  body, dl {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCEBEB;
    margin: 20px;
    [a] {
      padding-block: 10px;
    }
    [b] {
      padding-block: 30px;
    }
    p {
      margin: 0;
      padding: 130px 30px;
      background: repeating-linear-gradient(#DE6B67 0px, #DE6B67 5vw, 0, #FCEBEB 40px);
    }
    dl {
      position: fixed;
      inset: 25vw 50vh;
    }
  }
</style>
`;
