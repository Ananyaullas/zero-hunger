# Zero-Hunger Surplus Food App

## Project Description
This project is a web application designed to reallocate surplus food. It uses a **Google Sheet as its backend database** to manage and track food listings. Food donors can use the web app to post available surplus food, which is then recorded in the Google Sheet. Recipient organizations can view these listings and claim them, with all actions updated in real-time on the sheet. This system provides a simple, accessible way to reduce food waste and combat hunger.

## Features
- **Donor Dashboard:** Allows donors to submit available surplus food. This data is instantly pushed to the connected Google Sheet.
- **Recipient Dashboard:** Enables recipient organizations to browse food listings, which are fetched directly from the Google Sheet. They can claim food, and this action is also reflected on the sheet.
- **User Authentication:** Secure login and registration.
- **Search & Filter:** Functionality to search and filter food listings by location, type, and status (claimed/available).
- **Google Sheets Integration:** All data is stored and managed within a shared Google Sheet, making it easy to view and audit in real-time.

## Technologies Used
- **Frontend:**
  - React.js
  - CSS3
  - HTML5
- **Backend/Integration:**
  - Node.js
  - Express.js
  - Google Sheets API
  - Google Apps Script (for handling data updates from the web app)
- **Database:**
  - Google Sheets
- **Other:**
  - [List any other key technologies or libraries, e.g., Axios for API calls, etc.]

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (v14 or higher is recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A **Google Sheet** set up to act as your database.
- A **Google Cloud Project** with the Google Sheets API enabled and a **Service Account** to access the sheet.

### Installation
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mhd-raneesh123/zero-hunger.git](https://github.com/mhd-raneesh123/zero-hunger.git)
