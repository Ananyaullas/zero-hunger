import React, { useState } from 'react';
import './App.css';

export default function FoodReallocationApp() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ngoEmail: '',
    contact: '',
    foodType: '',
    quantity: '',
    prepDate: '',    // <-- Added Preparation Date
    prepTime: '',
    pickupAddress: '',
    notes: '',
    storageCondition: 'Refrigerated (0–4°C)',
    ngoStatus: 'Available'
  });

  const [donations, setDonations] = useState([]);
  const [ngoStatuses, setNgoStatuses] = useState([]);
  const [donationSearch, setDonationSearch] = useState('');
  const [ngoSearch, setNgoSearch] = useState('');
  const [role, setRole] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role === 'Donor') {
      await fetch('https://api.sheetbest.com/sheets/39336f9f-706f-4ac6-bb7e-aa74f4cadda1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          restaurantName: formData.restaurantName,
          contact: formData.contact,
          foodType: formData.foodType,
          quantity: formData.quantity,
          prepDate: formData.prepDate,        // <-- Send Prep Date
          prepTime: formData.prepTime,
          pickupAddress: formData.pickupAddress,
          notes: formData.notes,
          storageCondition: formData.storageCondition
        }),
      });

      setDonations([...donations, formData]);

    } else if (role === 'NGO') {
      await fetch('https://api.sheetbest.com/sheets/f2b2779b-2cee-4629-924e-8fae8f25423b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.restaurantName,
          email: formData.ngoEmail,
          storage: formData.storageCondition,
          status: formData.ngoStatus
        }),
      });

      setNgoStatuses([...ngoStatuses, { 
        name: formData.restaurantName, 
        email: formData.ngoEmail,
        storage: formData.storageCondition,
        status: formData.ngoStatus 
      }]);
    }

    alert('Form Submitted!');

    setFormData({
      restaurantName: '',
      ngoEmail: '',
      contact: '',
      foodType: '',
      quantity: '',
      prepDate: '',          // <-- Reset Prep Date
      prepTime: '',
      pickupAddress: '',
      notes: '',
      storageCondition: 'Refrigerated (0–4°C)',
      ngoStatus: 'Available'
    });
  };

  const filteredDonations = donations.filter(donation =>
    donation.restaurantName.toLowerCase().includes(donationSearch.toLowerCase()) ||
    donation.foodType.toLowerCase().includes(donationSearch.toLowerCase())
  );

  const filteredNgos = ngoStatuses.filter(ngo =>
    ngo.name.toLowerCase().includes(ngoSearch.toLowerCase())
  );

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <div className="toggle-theme">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="card">
        {!role && (
          <div className="role-selector">
            <h1>Choose Your Role</h1>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="input">
              <option value="">-- Select Role --</option>
              <option value="Donor">Donor</option>
              <option value="NGO">NGO</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        )}

        {role && (
          <div className="text-right">
            <button onClick={() => setRole('')} className="btn-secondary">Change Role</button>
          </div>
        )}

        {role === 'Donor' && (
          <>
            <h2>Food Donation Form</h2>
            <form onSubmit={handleSubmit} className="form-grid">
              <input name="restaurantName" value={formData.restaurantName} onChange={handleChange} placeholder="Restaurant Name" className="input" required />
              <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" className="input" required />
              <input name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" className="input" required />
              <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity (kg)" className="input" required />

              {/* New Preparation Date Field */}
              <input type="date" name="prepDate" value={formData.prepDate} onChange={handleChange} className="input" required />

              <input name="prepTime" value={formData.prepTime} onChange={handleChange} placeholder="Preparation Time" className="input" required />
              <input name="pickupAddress" value={formData.pickupAddress} onChange={handleChange} placeholder="Pickup Address" className="input" required />
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Special Notes" className="input"></textarea>
              <select name="storageCondition" value={formData.storageCondition} onChange={handleChange} className="input" required>
                <option value="Refrigerated (0–4°C)">Refrigerated (0–4°C)</option>
                <option value="Frozen (Below 0°C)">Frozen (Below 0°C)</option>
                <option value="Room Temperature (Above 4°C)">Room Temperature (Above 4°C)</option>
              </select>
              <button type="submit" className="btn-primary">Submit Donation</button>
            </form>
          </>
        )}

        {role === 'NGO' && (
          <>
            <h2>NGO Status Update</h2>
            <form onSubmit={handleSubmit} className="form-grid">
              <input name="restaurantName" value={formData.restaurantName} onChange={handleChange} placeholder="NGO Name" className="input" required />
              <input name="ngoEmail" value={formData.ngoEmail} onChange={handleChange} placeholder="NGO Email" className="input" required />
              <select name="storageCondition" value={formData.storageCondition} onChange={handleChange} className="input" required>
                <option value="Refrigerated (0–4°C)">Refrigerated (0–4°C)</option>
                <option value="Frozen (Below 0°C)">Frozen (Below 0°C)</option>
                <option value="Room Temperature (Above 4°C)">Room Temperature (Above 4°C)</option>
              </select>
              <select name="ngoStatus" value={formData.ngoStatus} onChange={handleChange} className="input">
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
              <button type="submit" className="btn-secondary">Update Status</button>
            </form>
          </>
        )}

        {role === 'Admin' && (
          <>
            <h2>Admin Dashboard</h2>
            <div className="table-section">
              <h3>Donations</h3>
              <input type="text" placeholder="Search Donations..." value={donationSearch} onChange={(e) => setDonationSearch(e.target.value)} className="input" />
              <table>
                <thead>
                  <tr>
                    <th>Restaurant</th>
                    <th>Food</th>
                    <th>Quantity</th>
                    <th>Preparation Date</th>
                    <th>Pickup</th>
                    <th>Storage</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDonations.map((donation, index) => (
                    <tr key={index}>
                      <td>{donation.restaurantName}</td>
                      <td>{donation.foodType}</td>
                      <td>{donation.quantity}</td>
                      <td>{donation.prepDate}</td>
                      <td>{donation.pickupAddress}</td>
                      <td>{donation.storageCondition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-section">
              <h3>NGO Statuses</h3>
              <input type="text" placeholder="Search NGOs..." value={ngoSearch} onChange={(e) => setNgoSearch(e.target.value)} className="input" />
              <table>
                <thead>
                  <tr>
                    <th>NGO Name</th>
                    <th>Email</th>
                    <th>Storage</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNgos.map((ngo, index) => (
                    <tr key={index}>
                      <td>{ngo.name}</td>
                      <td>{ngo.email}</td>
                      <td>{ngo.storage}</td>
                      <td>{ngo.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
