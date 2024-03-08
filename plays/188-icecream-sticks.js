module.exports = `
<p a><p a><p b><p b><p a c><p b c>
<style>
  * {
    background: var(--b, #FFFD9B);
    border-radius: 9in;
  }
  * * {
    margin: 15px;
  }
  p {
    position: fixed;
    --b: #969610;
  }
  [c] {
    --b: #646521;
  }
  [a] {
    height: 20px;
    width: 340px;
    top: 45px;
    & + [a] {
      top: 205px;
    }
    &[c] {
      top: 125px;
    }
  }
  [b] {
    height: 240px;
    width: 20px;
    left: 95px;
    & + [b] {
      left: 255px;
    }
    &[c] {
      left: 175px;
    }
  }
</style>
`;
