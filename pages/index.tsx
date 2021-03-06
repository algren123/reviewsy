/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// Hooks
import { useUser } from "@auth0/nextjs-auth0";

// Context
import { useModal } from "../context/modalContext";

// Components
import AddReviewModal from "../components/AddReviewModal";
import AnchorLink from "../components/AnchorLink";
import Button from "../components/Button";

// Motion
import { motion } from "framer-motion";

// Styles
import styles from "../styles/Home.module.scss";
import { useReviews } from "../context/reviewsContext";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  const { state, dispatch } = useModal();
  const reviews = useReviews();

  console.log(reviews);

  if (error)
    return <div>An error was encountered. Please try again later.</div>;

  return (
    <div>
      <Head>
        <title>Reviewsy.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/circular-std"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={styles.container}>
          {!user ? (
            <>
              <h1>Reviewsy.</h1>
              <div className={styles.introContainer}>
                <motion.div
                  initial={{ x: -500, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  className={styles.intro}
                >
                  <h1>
                    You can <em>finally</em> get your code reviewed.
                  </h1>
                  <p>
                    Improve your skills by getting the dev community to review
                    and point out possible mistakes in your code.
                  </p>
                  <AnchorLink link="api/auth/login" primary>
                    Get Started
                  </AnchorLink>
                  <AnchorLink link="api/auth/login" secondary>
                    Sign In
                  </AnchorLink>
                </motion.div>
                <motion.div
                  initial={{ x: 500, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className={styles.introImage}
                >
                  <Image
                    src="/frontpage_review.svg"
                    alt="Code Review"
                    className={styles.coverImage}
                    width={475}
                    height={400}
                  />
                </motion.div>
              </div>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ y: 500, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                Welcome back, {user.name?.split(" ")[0]}
              </motion.h1>
              {reviews &&
                reviews.map((review) => {
                  return (
                    <div>
                      Poster: {review.username}
                      {review.replies?.map((reply) => {
                        return (
                          <div>
                            Reply 1: {reply.username}
                            {reply.replies?.map((reply) => (
                              <div>Reply 2: {reply.username}</div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              <Button onClickAction={() => dispatch({ type: "show" })} primary>
                Add Review
              </Button>
              <AnchorLink link="api/auth/logout" secondary>
                Logout
              </AnchorLink>
              {state.showModal && <AddReviewModal />}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
