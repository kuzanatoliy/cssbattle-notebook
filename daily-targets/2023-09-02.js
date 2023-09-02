module.exports = `
<p a><p b><p><p b><p a><p>
<style>
  * {
    background: #D669EC;
  }
  body {
    display: flex;
    margin: 85px 60px;
    gap: 20px;
    align-items: end;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FDFBF8;
    margin: 0;
    height: 100%;
    flex: 1;
  }
  p:before, p:after {
    background: #D669EC;
    margin: 10px 0;
    display: block;
    content: '';
    width: 100%;
    height: 10px;
  }
  [a] {
    height: 92%;
  }
  [b] {
    height: 77%;
  }
</style>
`;
