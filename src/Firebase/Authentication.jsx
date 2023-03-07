
import { useState } from "react";
import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function App() {
  let auth = getAuth();

  const [data, setData] = useState([]);

  const handles = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };
  const handlesSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="text-center">
      <input name="email" placeholder="Email" onChange={(e) => handles(e)} 
        className='border-2 p-2 rounded-lg m-2'/>

      <input
        name="password"
        placeholder="Password"
        onChange={(e) => handles(e)}
        className='border-2 p-2 rounded-lg'
      />
      <br />
      <button 
      onSubmit={handlesSubmit}
        className='border-2 p-2 rounded-lg'
      >Submit</button>
    </div>
  );
}
