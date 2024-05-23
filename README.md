# Datasight - Data Analytics for Businesses

## Tech Stack

- Next.js
- React.js
- Tailwind CSS
- Ant Design

## Usage

### Run as a Docker Container

Make sure you are in parent directory of `Dockerfile`.

Switch to the root directory of the project and run:

```bash
# To build the image use following command
docker build -t datasight .

# After building image run using following command
docker run -p 3000:3000 datasight
```

### Run on Local Machine

Make sure you have `node.js` and `npm` installed.

Switch to the root directory of the project and run:

```bash
npm run dev
```