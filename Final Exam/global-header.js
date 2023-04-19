(function() {
    let headerHtml = `
<div id="global-header">
  <header>
    <nav>
    <! -- logo -- >
      <div class="logo">
        <img src="../Final%20Exam/Images/sample-logo.png" alt="Logo"/>
      </div>
      <! -- menu buttons -- >
      <div class="menu-buttons">
        <p><a href="#home">Home</a></p>
        <p> | </p>
        <p><a href="#about">About</a></p>
        <p> | </p>
        <p><a href="#contact">Contact</a></p>
      </div>
      <! -- Search bar -- >
      <div class="search-container">
        <form action="#">
          <input type="text" placeholder="Search...">
        </form>
      </div>
    </nav>
  </header>
</div>
`;


    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.menu-container').classList.toggle('active');
    });
})();

(function() {
    let footerHtml = `
    <div id="global-footer">
      <footer>
      <! -- footer logo  -- >
        <div class="footer-logo">
        <img src="../Final%20Exam/Images/sample-logo.png" alt="Logo"/>
        </div>
        <! -- footer content -- >
        <div class="footer-content">
        <h3>Title</h3>
          <p>&copy; Lorem ipsum dolor sit amet, consectetur adipiscing elit, de do 
          eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </footer>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', footerHtml);
})();