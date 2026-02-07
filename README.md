# DentalCare Clinic Website

A modern, responsive website for a Dental Clinic built with React, TypeScript, and Vite. This project is designed to help dental practices showcase their services, doctor profiles, and facilities while allowing patients to easily book appointments.

## 🚀 Features

- **Home Page**: Engaging hero section, service highlights, patient testimonials, and location map.
- **About Us**: Detailed doctor profiles, clinic philosophy, and qualifications.
- **Services**: Comprehensive list of treatments with descriptions and pricing indications.
- **Gallery**: Visual tour of the clinic's facilities and patient smiles.
- **Contact & Booking**: Interactive contact page with an appointment booking form, Google Maps integration, and click-to-call/email actions.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Floating Actions**: Quick-access WhatsApp button for immediate communication.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with CSS Variables (Theming)
- **Maps**: Google Maps Embed

## 📦 Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd clinic
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 🏃‍♂️ Usage

### Development Server
To start the local development server:
```bash
npm run dev
# or
npm start
```
Open your browser and navigate to `http://localhost:5173/` (or the port shown in your terminal).

### Build for Production
To build the project for deployment:
```bash
npm run build
```
The output files will be in the `dist` directory.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, etc.)
├── pages/            # Page components (Home, About, Services, Contact, etc.)
├── App.tsx           # Main application component and routing setup
├── index.css         # Global styles and CSS variables
└── main.tsx          # Application entry point
```

## 🎨 Customization

- **Colors**: Edit global CSS variables in `src/index.css` (e.g., `--primary`, `--secondary`).
- **Content**: Update text and images directly in the page components located in `src/pages/`.
- **Icons**: Replace or add icons using the `lucide-react` library.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
