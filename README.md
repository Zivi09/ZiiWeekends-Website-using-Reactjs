
# Travel Booking Web Application

This is a simple travel booking web application built using React.js. It allows users to search for travel packages, filter results, view detailed packages, and make bookings. The project includes a variety of useful libraries for UI components, routing, image galleries, and date pickers.
(note: the development is underprocess hence some functionality may not be functioning
## Features

- Travel package listings
- Search and filter functionality
- Detailed package page
- Booking form
- API integration (mock data)
- Mobile responsiveness
- Image galleries
- Date pickers
- State management (optional)

## Libraries and Tools Used

- **React**: Core library for building the user interface.
- **Bootstrap**: Styling framework for responsive design.
- **React-Bootstrap**: React components based on Bootstrap.
- **React-Router-Dom**: For managing routing and navigation.
- **React-Datepicker**: For selecting travel dates.
- **React-Slick**: For displaying carousels/sliders of travel packages.
- **Slick-Carousel**: Required for `react-slick` functionality.
- **React-Image-Gallery**: For displaying an image gallery of travel destinations.
- **React-Lightbox-Gallery**: For lightbox gallery functionality.

## Prerequisites

Ensure you have Node.js and npm installed on your system:

```bash
node -v
npm -v
```

If not installed, download from [Node.js official website](https://nodejs.org/).

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/travel-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd travel-app
   ```

3. **Install dependencies**:

   To avoid any peer dependency issues, install using the following command:

   ```bash
   npm install --legacy-peer-deps
   ```

4. **Start the application**:

   Once the dependencies are installed, start the development server with:

   ```bash
   npm start
   ```

   The app will open in your default web browser at [http://localhost:3000](http://localhost:3000).

## How to Use

### Running the Application

To run the application in development mode:

```bash
npm start
```

This will start a local server, and you can view the application at `http://localhost:3000`.

### Building for Production

To build the app for production to optimize performance:

```bash
npm run build
```

This will create a `build` directory with all the static files needed for deployment.

### Testing

To run the tests:

```bash
npm test
```

This will run the test cases configured for the project.

## Project Structure

```bash
travel-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components (Home, Package Details, etc.)
│   ├── assets/             # Images and static files
│   ├── App.js              # Main application file
│   ├── index.js            # Entry point for the app
├── .gitignore              # Files to ignore in version control
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

## Key Dependencies

- `react`: Core UI library.
- `react-router-dom`: Handles navigation and routing.
- `bootstrap` & `react-bootstrap`: UI components and styles.
- `react-datepicker`: Date picker for booking dates.
- `react-slick` & `slick-carousel`: Carousel for displaying travel packages.
- `react-image-gallery`: Image gallery for showcasing packages.
- `react-lightbox-gallery`: Lightbox for viewing images.

## Troubleshooting

- If you encounter peer dependency issues during installation, use:

  ```bash
  npm install --legacy-peer-deps
  ```

- For any other errors, please check the `npm` log file mentioned in the error message for detailed information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
