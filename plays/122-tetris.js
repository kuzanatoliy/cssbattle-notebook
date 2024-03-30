module.exports = `
<p><p><p><p><p r><p>
<p><p><p><p r><p r><p>
<p y><p y><p><p r><p><p>
<p y><p y><p r><p><p p>
<p><p r><p r><p r><p b><p p><p p>
<p y><p b><p b><p b><p p><p b>
<style>
  * {
    background: var(--b, #173889);
    margin: 0;
    body {
      margin: 0 50px;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    p {
      width: 45px;
    }
    [y] {
      --b: #F8DA37;
    }
    [r] {
      --b: #EE4F63;
    }
    [b] {
      --b: #2CE1EA;
    }
    [p] {
      --b: #B069F7;
    }
  }
</style>
`;
