# Datasight - Data Analytics for Businesses

Live at: [https://datasight-pipeline-de9c93a42c8f.herokuapp.com/](https://datasight-pipeline-de9c93a42c8f.herokuapp.com/)

## Tech Stack

- Next.js
- React.js
- Tailwind CSS
- Ant Design

## Usage

### Run as a Docker Container

Make sure you have `docker` installed.

Switch to the root directory of the project in your terminal and run:

```bash
# To build the image use following command
docker build -t datasight .

# After building image run using following command
docker run -p 3000:3000 datasight

# Use Prebuilt Image
docker run -p 3000:3000 garudkar/datasight
```

### Run on Local Machine

Make sure you have `node.js` and `npm` installed.

Switch to the root directory of the project in your terminal and run:

```bash
# Install Required Dependencies
npm install

# Run the Development Server
npm run dev
```