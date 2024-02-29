module.exports = `
<p><p a><p>
<style>
  * {
    background: var(--b, #5C3921);
  }
  * * {
    margin: 50px 100px;
  }
  [a] {
    --b: #FBBA24;
  }
  p {
    height: 100px;
    --b: #C17D1B;
    margin: 10px 0;
    border-radius: 82px 82px 15px 15px;
    & + p {
      height: 40px;
      border-radius: 9in;
      & + p {
        border-radius: 10px 10px 30px 30px;
      }
    }
  }
</style>
`;
