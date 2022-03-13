
# Fetcher

A web application to allow users to move a package from point A to B.

## Website

[fetcher.live](https://fetcher.live)

## Authors

- [Hamza Aziz](https://www.linkedin.com/in/hamzaaziz975/)
- [Holden Gutwin](https://www.linkedin.com/in/holdengutwin/)
- [Liam Hilkewich](https://www.linkedin.com/in/liam-hilkewich-8322a0234/)
- [Tanmay Pathak](https://www.linkedin.com/in/pathak-tanmay/)
- [Theodore Buckley](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Environment Variables

To run this project, you will need to add the following environment variables in your `.env` file.

1. `MONGODB_URI`
MongoDB Atlas URI to connect to the DB.

2. `NEXT_PUBLIC_VERCEL_URL`
Base URL of the project. If deployed with Vercel, this variable is auto filled.

3. `URL_START`
`http://` or `https://` to be used as a prefix to the API URLs.

4. `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`  
Google Maps API key for Autocomplete box and Maps component.

5. `DB`
Database name to be used.

## Tech Stack

**Client:** [React](https://reactjs.org), [Next.JS](https://nextjs.org), [Styled-Components](https://styled-components.com)

**Database:** [MongoDB Atlas](https://www.mongodb.com/atlas/database)

**Server Infrastructure** [Vercel](https://vercel.com/)

## Screenshots

![Home Page](/images/homepage.png)
![Orders](/images/orders.png)
![Check Out](/images/checkout.png)