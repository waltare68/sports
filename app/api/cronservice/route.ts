const fs = require('fs').promises;
    const cron = require('node-cron');
    const axios = require('axios');

    const dataDirectory = './app/data';
    const dataFilePath = `${dataDirectory}/gamesData.json`;

    fs.mkdir(dataDirectory, { recursive: true })
    .then(() => console.log('Data directory created'))
    .catch((error: any) => console.error('Error creating data directory:', error));

export async function GET(request: Request) {
    const maxRetries = 3;
    let retries = 0;    

    while (retries < maxRetries) {
        try {
            console.log('Fetching data from API...');
            const response = await fetch('https://apis.odibets.com/v5/matches');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json()

            // Save the data to a file
            await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
            console.log('data written success');
            // Add your additional processing logic here
            break;
        } catch (error) {
            console.error('Error fetching data:', error);
            retries++;

      if (retries < maxRetries) {
            const delaySeconds = 5; // Adjust the delay time as needed
            console.log(`Retrying in ${delaySeconds} seconds...`);
                await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));
            } else {
                console.error(`Maximum retries (${maxRetries}) reached. Exiting.`);
            }
        }
    };

    return Response.json({ Message: "Success" })
}