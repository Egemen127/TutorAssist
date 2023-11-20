import Link from "@mui/material/Link"

function Forgotpw() {
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("form submitted");
    }

    return <div className='App'>
              <header className="App-header">
                <div><img className='App-logo'src='https://picsum.photos/50' alt='tutorassist.io logo'/>
                <Link variant="h2" underline="hover" style={{underline:"none"}} href="/">TutorAssist.IO</Link></div>
              </header>
              <form onSubmit={handleSubmit}>
              <input className='input-field' placeholder='Email' type={'email'}
              label='email'
              name = 'email' />
                <select className="input-field" id="q_1">
              <option value="option 1">question1</option>
              <option value="option 2">question2</option>
              </select>
              <input className='input-field' placeholder='Answer 1' type={'text'}
              label='answer2'
              name = 'answer2' />
              <button>Submit</button>
              </form>
            </div>
}

export default Forgotpw;