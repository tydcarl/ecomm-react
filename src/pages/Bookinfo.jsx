import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="" alt="" className="book__selected--ig" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the Coding Interview
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={null} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae libero cumque exercitationem quia atque? Eum,
                    doloremque. Autem accusamus, quo optio tenetur, id nihil
                    perferendis nam reiciendis asperiores in fugiat
                    exercitationem!
                  </p>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae libero cumque exercitationem quia atque? Eum,
                    doloremque. Autem accusamus, quo optio tenetur, id nihil
                    perferendis nam reiciendis asperiores in fugiat
                    exercitationem!
                  </p>
                </div>
                <button className="btn">
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bboks__container">
            <div className="row">
                <div className="books__selected--top">
                    <div className="book__selected--title--top">
                        Recommended Books
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
