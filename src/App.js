import Front_panel from './components/Front_Panel/Front_panel';
import Login_form from './components/Front_Panel/Login_from';
import Register_form from './components/Front_Panel/Register_form';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front_panel />}>
          <Route path="login" element={<Login_form />} />
          <Route path="register" element={<Register_form />} />
          <Route path="user_page"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
