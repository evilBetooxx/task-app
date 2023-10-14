import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { AuthProvider } from "./context/AuthContext.jsx"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tasks" element={<h1>Task Page</h1>}/>
        <Route path="/add-task" element={<h1>New Task</h1>}/>
        <Route path="/tasks/:id" element={<h1>Update Task</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App