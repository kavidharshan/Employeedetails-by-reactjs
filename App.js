import './style.css';

function App() {
  return (
    <div className="container">
    <div className="left_page">
      <header>
        <h1>Welcom to our organization</h1>
        <p className="page_tag">please fill your credentials here...</p>
        </header>
        <form>
        <input placeholder="Username" type="username" ></input>
        <input placeholder="Password" type="pwd"></input>
        <div className="form_item">
        <input className="ckeckbox" type="checkbox"></input>
        <label for="checkbox">Remember me</label>
        </div>
        <div className="form_footer">
        <a href="singup_page">Signup for Newuser</a>
        </div>
        <button>submit</button>  
        </form>
          
    </div>
    <div className="right_page">
      <img src="https://blog.vantagecircle.com/content/images/2021/05/Organizational-Skills.png" />
    </div>
    </div> 
  );
}

export default App;
