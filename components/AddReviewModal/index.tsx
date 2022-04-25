import { useModal } from "../../context/modalContext";
import Button from "../Button";

import styles from "./index.module.scss";

const AddReviewModal = () => {
  const { dispatch } = useModal();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <label htmlFor="post-title">Title</label>
        <input type="text" name="post-title" id="post-title" />
        <label htmlFor="post-description">Description</label>
        <textarea name="post-description" id="post-description" />
        <label htmlFor="post-gist">Gist link</label>
        <input type="text" name="post-gist" id="post-gist" />
      </div>
      <Button primary>Post</Button>
      <Button onClickAction={() => dispatch({ type: "hide" })} tertiary>
        Close
      </Button>
    </div>
  );
};

export default AddReviewModal;
