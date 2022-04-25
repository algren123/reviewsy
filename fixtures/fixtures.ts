export const TypicalReview = [{
    id: 0,
    username: "Algren Pauna",
    email: "algren.pauna@gmail.com",
    dateAdded: "25/04/2022 23:22",
    title: "Reviewsy Modal Context",
    description: "Created a new context to keep the modal's state and let it be shared by the custom Button component",
    gistLink: "https://www.github.com/algren123/reviewsy",
    upvotes: 13,
    replies: [{
        id: 0,
        username: "John Smith",
        email: "john.smith@gmail.com",
        dateAdded: "25/04/2022 23:25",
        comment: "Is this not too complex for such a small thing that can be done with normal useState?",
        upvotes: 20,
        replies: [{
            id: 0,
            username: "Algren Pauna",
            email: "algren.pauna@gmail.com",
            dateAdded: "25/04/2022 23:30",
            comment: "I have used the custom context so that the modal state can be used throughout the whole application without prop-drilling",
            upvotes: 5,
            replies: []
        }]
    }]
}]