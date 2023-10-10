module.exports = `
<p><p a><p>
<style>
  body {
   	margin: 40px 40px;
    display: flex;
    background: #6592CF;
  }
  p {
    margin: 0;
    width: 80px;
    height: 40px;
    border-radius: 100px 100px 0 0;
    border: solid 20px #060F55;
    border-bottom: 0;
  }
  p + p {
    margin-left: -20px;
  }
  [a] {
    align-self: flex-end;
    transform: rotateX(180deg);
  }
</style>
`;
