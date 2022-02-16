module.exports = `
<p/><p a/><p/><p a b/><p/><p a b/>
<style>
  * {
    margin: 0;
  }
  body { 
    background: #62306D;
    padding: 50px;
  }
  p {
    float: left;
    width: 100px;
    height: 100px;
  }
  [a] {
    background: #F7EC7D;
    border-radius: 50% 50% 0 0;
  }
  [b] {
    transform: rotate(180deg);
  }
</style>
`
