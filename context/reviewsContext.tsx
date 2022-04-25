import axios from "axios";
import React from "react";
import { TypicalReview } from "../fixtures/fixtures";

type CountProviderProps = { children: React.ReactNode };
interface Reply {
  id: number;
  username: string;
  email: string;
  dateAdded: string;
  comment: string;
  upvotes: number;
  replies?: Reply[];
}
interface Review {
  id: number;
  username: string;
  email: string;
  dateAdded: string;
  title: string;
  description: string;
  gistLink: string;
  upvotes: number;
  replies?: Reply[];
}

const ReviewsContext = React.createContext<Review[] | null>(null);
function ReviewsProvider({ children }: CountProviderProps) {
  const [reviews, setReviews] = React.useState<Review[] | null>(null);

  React.useEffect(() => {
    // axios
    //   .get("http://localhost:3000/reviews")
    //   .then((res) => setReviews(res.data));
    setReviews(TypicalReview);
    console.log(reviews);
  }, []);

  return (
    <ReviewsContext.Provider value={reviews}>
      {children}
    </ReviewsContext.Provider>
  );
}

function useReviews() {
  const context = React.useContext(ReviewsContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export { ReviewsProvider, useReviews };
