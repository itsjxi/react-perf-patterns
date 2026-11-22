import './App.css';
import ConcurrentProgressBar from './features/concurrentProgressBar/index.jsx';
import InfiniteScroll from './features/infiniteScroll/index.jsx';
import OTPComponent from './features/otp/index.jsx';
import Timer  from './features/timer/index.jsx';
import ToastContainer from './features/toastNotification/index.jsx';

export default function App() {
  return (
    <>
      {/* <ConcurrentProgressBar />
      <InfiniteScroll /> */}
      {/* <Timer/> */}
      {/* <ToastContainer/> */}
      <OTPComponent/>
    </>
  );
}
