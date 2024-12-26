Let's add the screenshots to your README file to make it more informative and visually appealing. Here are the updated sections with screenshots included:

---

# 🚂 Locomotion Project

The Locomotion Project is a web-based application designed to track train schedules and provide users with real-time information on train arrivals at specific stations. This project is built using modern web technologies and aims to make commuting easier by giving users quick access to accurate train timings.

## 📋 Table of Contents
- ⭐ Features
- 🛠️ Tech Stack
- 🧰 Installation
- 🚀 Usage
- 📂 Folder Structure
- 📝 Contributing
- 📄 License

## ⭐ Features
- **Real-time train tracking**: Displays accurate arrival times of trains at specific stations.
- **Detailed schedule management**: Users can view train schedules for various stations.
- **User-friendly interface**: Built with React.js and Next.js for a smooth user experience.
- **Efficient data management**: Powered by PocketBase to handle train, station, and schedule data.

## 🛠️ Tech Stack

### Frontend:
- React.js
- Next.js

### Backend:
- PocketBase (for database management and backend services)

### Other Tools:
- HTML/CSS (for styling)
- Tailwind CSS (optional, for faster styling)

## 🧰 Installation

To run the Locomotion Project locally, follow these steps:

### Prerequisites
- Node.js (v16 or higher)
- PocketBase (installed locally or using the hosted version)

### Steps:

#### 1️⃣ Clone the repository:
```bash
git clone https://github.com/your-username/locomotion-project.git
cd locomotion-project
```

#### 2️⃣ Install dependencies:
```bash
npm install
```

#### 3️⃣ Run the application:

##### Start the Next.js development server:
```bash
npm run dev
```

##### Set up PocketBase:
- If you're hosting PocketBase locally, download and run it following the official PocketBase setup guide.
- Create the necessary collections for stations, trains, and schedules using the structure outlined in the Folder Structure section.

#### 4️⃣ Access the app:
Open your browser and visit `http://localhost:3000` to see the app in action.

## 🚀 Usage

Once the app is running, you can navigate through the homepage to search for trains based on the station. The app will display a list of train schedules along with their expected arrival times at each station.

### Screenshots

#### Homepage

![Homepage](https://github.com/nishnarudkar/Locomotion_project/blob/master/website%20photos/Screenshot%202024-12-26%20182308.png)

#### Train Schedule

![Train Schedule](https://github.com/nishnarudkar/Locomotion_project/blob/master/website%20photos/Screenshot%202024-12-26%20182335.png)

#### Real-time Tracking

![Real-time Tracking](https://github.com/nishnarudkar/Locomotion_project/blob/master/website%20photos/Screenshot%202024-12-26%20182433.png)

### Database Screenshots

#### Database Overview

![Database Overview](https://github.com/nishnarudkar/Locomotion_project/blob/master/database%20photos/Screenshot%202024-12-26%20184627.png)

#### Train Data

![Train Data](https://github.com/nishnarudkar/Locomotion_project/blob/master/database%20photos/Screenshot%202024-12-26%20184641.png)

#### Station Data

![Station Data](https://github.com/nishnarudkar/Locomotion_project/blob/master/database%20photos/Screenshot%202024-12-26%20184659.png)

## 📂 Folder Structure

Here’s an overview of the folder structure:
```
locomotion-project/
├── public/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages
│   │   ├── index.js       # Homepage
│   ├── services/          # API calls and PocketBase interaction
│   └── styles/            # Global and component-specific styles
├── README.md
└── package.json
```

### PocketBase Collections:
- **Trains**: Contains data about each train (e.g., train name, number, etc.).
- **Stations**: Contains station data (e.g., station name, code, etc.).
- **Schedules**: Stores the schedule of trains at each station.

## 📝 Contributing

We welcome contributions to enhance the Locomotion Project! To contribute:

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-branch
```
3. Make your changes and commit them:
```bash
git commit -m "Add new feature"
```
4. Push to the branch:
```bash
git push origin feature-branch
```
5. Create a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to add or modify any sections as needed!
