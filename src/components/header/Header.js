import React from 'react'
import { logoutUser } from '../../services/authService'
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGGIN, selectName } from '../../redux/features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async()=>{
    await logoutUser();
    await dispatch(SET_LOGGIN(false));
    navigate('/login');
  }
  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">{name}</span>
        </h3>
        <button onClick={logout} className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr />
    </div>
  )
}

export default Header