# Zero-Hunger Surplus Food App

A **low-code web application** designed to **reallocate surplus food** using **Relay.app workflows** and **Google Sheets** as a backend database.  
The system connects food donors with recipient NGOs in real time, reducing food waste and helping fight hunger.  

---

## 📖 Project Description
This project leverages **Relay.app** and **workflow automation** to simplify food reallocation:  

- **Donors** submit surplus food details through a web form.  
- **Relay workflows** automatically record this data in a connected **Google Sheet**.  
- **Recipient NGOs** can browse and claim available food, with their actions instantly reflected in the sheet.  

This approach keeps the system **simple, lightweight, and transparent**, while avoiding the complexity of traditional full-stack databases.  

---

## ✨ Features
- **Donor Dashboard** → Submit surplus food items, instantly logged via Relay workflows.  
- **Recipient Dashboard** → Browse & claim food listings in real time.  
- **User Authentication** → Secure login & registration.  
- **Search & Filter** → Find food by location, type, or availability status.
- **Google Sheets Integration:** All data is stored and managed within a shared Google Sheet, making it easy to view and audit in real-time.
- **Relay + Google Sheets Integration** → Automates data flow between donors, NGOs, and the shared sheet.  

---

## 🛠️ Technologies Used
**Frontend**
- React.js  
- CSS3  
- HTML5  

**Backend / Integration**
- Relay.app (workflow automation)  
- Google Sheets API  
- Google Apps Script (for handling data updates from the web app)
- Node.js (for any additional endpoints)  
- Express.js  

**Database**
- Google Sheets  

**Other**
- Axios (API calls)  

---

## Getting Started
### ✅ Prerequisites
Before starting, ensure you have:  
- [Node.js](https://nodejs.org/en/) (v14 or higher)  
- [npm](https://www.npmjs.com/)  
- A **Google Sheet** set up as your database  
- A **Google Cloud Project** with Google Sheets API enabled  
- A **Relay.app account** with workflows connected to your Google Sheet  

---

### Screenshots
1.Role Selection:
Users can choose their role (Donor, NGO, or Admin) to access tailored dashboards

![hgfd](https://github.com/user-attachments/assets/dfc1a326-16f9-454d-afa2-1edd25e178fb)

2.NGO Dashboard:
NGOs can update their status (e.g., storage capacity and availability)

![nb](https://github.com/user-attachments/assets/636b8f59-539b-410e-8118-4aef58d15838)

3.Admin Dashboard:
Admins can view all donations and NGO statuses in one place, with search functionality

![rrr](https://github.com/user-attachments/assets/5c2502a8-9e3c-433b-899e-d07273f13fdd)

4.Donor Dashboard:
Donors can submit food donation details (restaurant name, food type, quantity, pickup, etc.)

![tr](https://github.com/user-attachments/assets/dced09ed-bdc3-4135-bd75-ef59a4cb7cd4)

5.Relay Workflow Automation:

Trigger: A new row is added in the Donor Sheet
Actions:
- Find NGO in the NGO Sheet
- Use AI Agent for smart matching
- Notify NGOs via Gmail automatically

![rr](https://github.com/user-attachments/assets/17842722-519f-44b8-8a60-57ba6760b208)





### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mhd-raneesh123/zero-hunger.git
   cd zero-hunger
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up environment variables (required for Google Sheets API)**

4. **Run the app:**
   ```bash
   npm start
