import React from "react";
import Header from "./Header";
import "./App.css";
import Scrolling from "./Scrolling";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Review";
import Booking from "./Booking";
import { useStateValue } from "./StateProvider";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import AdminBooking from "./AdminBooking";
import Footer from "./Footer";
import AdminReview from "./AdminReview";
import Pdfprint from "./Pdfprint";

// import ImageGallery from 'react-image-gallery';

// import "~react-image-gallery/styles/scss/image-gallery.scss";


// import "~react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: './src/Media/kingdom-of-dreams(2).jpg',
    thumbnail: './src/Media/kingdom-of-dreams(2).jpg',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function App() {
  const [{ user, id }] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/images">
            <Header />
            {/* <ImageGallery items={images} /> */}
            <Footer />
          </Route>

          <Route path="/review">
            <Header />
            <Review />
            <Footer />
          </Route>

          <Route path="/booking">
            {id ? (
              <>
              <Header />
              <Pdfprint />
              <Footer />
              </>
            ) : (
              <>
                <Header />
                <Booking />
                <Footer />
              </>
            )}
          </Route>

          <Route path="/signup">
            {user ? (
              <>
                <SignUp />
              </>
            ) : (
              <>
                <Header />
                <Scrolling />
              </>
            )}
          </Route>

          <Route path="/adminreview">
            {user ? (
              <>
                <AdminReview />
              </>
            ) : (
              <>
                <Header />
                <Scrolling />
              </>
            )}
          </Route>

          <Route path="/admin">{!user ? <Login /> : <AdminBooking />}</Route>

          <Route path="/">
            <Header />
            <Scrolling />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
