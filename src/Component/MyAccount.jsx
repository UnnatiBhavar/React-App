// src/MyAccount.js
import React, { useState } from 'react';
import './MyAccount.css'; // Optional for styling

const MyAccount = () => {
    // Simulating user data with state
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
       
    });

    // States for edit mode and updated info
    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user);

    // Handle input change during edit
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    // Save changes
    const saveChanges = () => {
        setUser(updatedUser);
        setIsEditing(false);
    };

    // Render user info or editable inputs
    return (
        <div>
            <h1 style={{ color:'#0047AB'}}>Welcome To FlyBharat</h1>
            <div className="account-container">
                <h3 className='text-center'>My Account</h3>

                {isEditing ? (
                    <div className="edit-mode">
                        <label className='bold-text me-2'>First Name:</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder='Enter First name'
                            value={updatedUser.firstname}
                            onChange={handleInputChange}
                        />
                        <label className='bold-text me-2'>Last Name:</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder='Enter Last name'
                            value={updatedUser.lastname}
                            onChange={handleInputChange}
                        />
                        <label className='bold-text me-2'>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter a email'
                            value={updatedUser.email}
                            onChange={handleInputChange}
                        />
                        <label className='bold-text me-2'>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder='Enter a phone no'
                            value={updatedUser.phone}
                            onChange={handleInputChange}
                        />
                        <label className='bold-text me-3'>Gender:</label>
                        <select
                            name="gender"
                            value={updatedUser.gender}
                            onChange={handleInputChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        
                        <button onClick={saveChanges}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                ) : (
                    <div className="view-mode">
                        <p ><strong>First Name:</strong> {user.firstname}</p>
                        <p><strong>Last Name:</strong> {user.lastname}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                       
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAccount;