export default function getResponseFromAPI() {
  // Define the response variable before the Promise is created
  const response = true;

  // Create a Promise that resolves with the response
  return new Promise((resolve) => {
    resolve(response);
  });
}
