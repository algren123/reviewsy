import axios from "axios";
import React from "react";

type Dispatch = (action: Action) => void;
type State = {};
type Action = { type: "show" } | { type: "hide" };
type CountProviderProps = { children: React.ReactNode };

const ReviewsContext = React.createContext(null);

function ModalProvider({ children }: CountProviderProps) {
  const [reviews, setReviews] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((res) => setReviews(res.data));
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

export { ModalProvider, useReviews };
