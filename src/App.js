import logo from './logo.svg';
import './App.css';
import Logo from './component/Logo';
import Accordian from './component/Accordian';

const faq = [
  {
      title: "Where is this chair Assembled?",
      text: "This chair is assembled in the caves of Karnataka. Made by Artisans who are 1000 years old"
  },
  {
      title: "How long do I have to return my chair?",
      text: "You can have the chair for 30 days after which you cannot return it. It will be with you for the rest of your life"
  },
  {
      title: "Do you ship to countries outside the EU?",
      text: "Offcourse, we ship everywhere on Earth. We though of Black Holes, but then decided Uranus was better"
  }
]

function App() {
  return (
    <div className="main-content">

      <div className='top-content'>
        <Logo/>
      </div>

      <div className='mid-content'>
        <Accordian data= {faq} />
      </div>

    </div>
  );
}

export default App;
