import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import GetCustomers from './Components/GetCustomers';
import AddCustomer from './Components/AddCustomer';


import{
  BrowserRouter,
    Route,
  Routes
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter class="app">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/add" element={<AddCustomer />} />
          <Route path="/getcustomers" element={<GetCustomers />} />
          
        </Routes>
      </BrowserRouter>
    );
}

export default App;
