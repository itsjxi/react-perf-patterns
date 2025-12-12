import Tabs from './components/Tabs/Tabs';
import Todo from './features/Todo/Todo';
import InfiniteScroll from './features/InfiniteScroll/InfiniteScroll';
import Carousel from './features/Carousel/Carousel';
import './App.css';
import BrandGuidelinesGenerator from './features/BrandGuidelinesGenerator/BrandGuidelinesGenerator.jsx';
import AutoSuggest from './features/autoSerach/index.jsx';
import { OTPInput } from './features/otp/index.js';

function App() {
  const tabs = [
    {
        label: 'Brand Guide lines',
        component: <BrandGuidelinesGenerator />
      },
    // {
    //   label: 'OTP Input',
    //   component: <OTPInput otplength = {4}/>
    // }
    // {
    //   label: 'Todo App',
    //   component: <Todo />
    // },
    // {
    //   label: 'Infinite Scroll',
    //   component: <InfiniteScroll />
    // },
    // {
    //   label: 'Carousel',
    //   component: <Carousel />
    // },
    // {
    //   label: 'AutoSuggest',
    //   component: <AutoSuggest/>
    // }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Features Playground</h1>
        <p>Practice different React features in isolated tabs</p>
      </header>
      <main className="app-main">
        <Tabs tabs={tabs} />
      </main>
    </div>
  );
}

export default App;
