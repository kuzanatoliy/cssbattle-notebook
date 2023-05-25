module.exports = `
<p a><p b><p c><p d><p e>
<style>
  body {
    background: #998235;
  }
  p {
    position: absolute;
    top: 44px;
    height: 180px;
    border-radius: 50%;
  }
  [e] {
    background: #0B2429;
    width: 40px;
    height: 180px;
    border-radius: 20q;
    left: 180px;
    top: 164px;
  }
  [d] {
    width: 80px;
    height: 40px;
    border-radius: 80q 80q 0 0;
    left: 140px;
    top: 174px;
    border: 20px solid #fff;
    border-bottom: none;
  }
  [c] {
    background: #0B2429;
    width: 20px;
    height: 10px;
    border-radius: 0 0 25q 25q;
    left: 150px;
    top: 134px;
    border: 10px solid #998235;
    border-top: none;
    -webkit-box-reflect: right 20px;
  }
  [b] {
    width: 180px;
    background: #1A4341;
    left: 110px;
  }
  [a] {
    left: 50px;
    width: 80px;
    background: #0B2429;
    box-shadow: inset 16px 0 #1A4341;
    -webkit-box-reflect: right 140px;
  }
</style>
`;
