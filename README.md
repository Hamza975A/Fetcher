
# Fetcher

A web application to allow users to move a package from point A to B.

## Websites

[Client Side - www.fetcher.live](https://fetcher.live)

[Driver Side - www.cmpt-370-aziz-angels-blond.vercel.app](https://cmpt-370-aziz-angels-blond.vercel.app/)

## Authors

- [Hamza Aziz](https://www.linkedin.com/in/hamzaaziz975/)
- [Holden Gutwin](https://www.linkedin.com/in/holdengutwin/)
- [Liam Hilkewich](https://www.linkedin.com/in/liam-hilkewich-8322a0234/)
- [Tanmay Pathak](https://www.tanmaypathak.tech/)
- [Theodore Buckley](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Environment Variables

To run this project, you will need to add the following environment variables in your `.env` file.

| Variable                        | Description                                                                     | Used                 |
|---------------------------------|---------------------------------------------------------------------------------|----------------------|
| MONGODB_URI                     | MongoDB Atlas URI to connect to the DB.                                         | Client & Driver Side |
| NEXT_PUBLIC_VERCEL_URL          | Base URL of the project. If deployed with Vercel, this variable is auto filled. | Client & Driver Side |
| URL_START                       | `http://` or `https://` to be used as a prefix to the API URLs.                 | Client & Driver Side |
| NEXT_PUBLIC_GOOGLE_MAPS_API_KEY | Google Maps API key for Autocomplete box and Maps component.                    | Client & Driver Side |
| DB                              | Database name to be used.                                                       | Client & Driver Side |
| GOOGLE_ID                       | Google ID for OAuth with Next-Auth                                              | Client Side          |
| GOOGLE_SECRET                   | Google Secret for OAuth with Next-Auth                                          | Client Side          |
| NEXTAUTH_URL                    | URL for Next-Auth. If deployed with Vercel, this variable is auto filled.       | Client Side          |
| NEXTAUTH_SECRET                 | Secret for Next-Auth.                                                           | Client Side          |
| DISCORD_CLIENT_ID               | Discord ID for OAuth with Next-Auth.                                            | Client Side          |
| DISCORD_CLIENT_SECRET           | Discord Secret for OAuth with Next-Auth.                                        | Client Side          |
| SENDGRID_KEY                    | SendGrid API Key for Email notifications.                                       | Client & Driver Side |

## Run Locally

> at localhost:3000

### System Requirements

- [Node.js 12.22.0](https://nodejs.org/) or later
- MacOS, Windows (including WSL), and Linux are supported

### Clone Project

```bash
git clone https://git.cs.usask.ca/haa037/CMPT-370-Aziz-Angels.git
cd CMPT-370-Aziz-Angels/
```

### Run Client Side

```bash
cd frontend/
npm i
npm run dev
```

### Run Driver Side

```bash
cd driver-side/
npm i
npm run dev
```

## Tech Stack

**Client & Driver Side:** [React](https://reactjs.org), [Next.JS](https://nextjs.org), [Styled-Components](https://styled-components.com)

**Database:** [MongoDB Atlas](https://www.mongodb.com/atlas/database)

**Server Infrastructure** [Vercel](https://vercel.com/)

**Login:** [Next-Auth](https://next-auth.js.org)

**Maps:** [Google Maps API](https://developers.google.com/maps)

## Screenshots

![Home Page1](/images/homepage.png)
![Home Page2](/images/homepage-1.png)
![Orders](/images/orders.png)
![Order](/images/order.png)
