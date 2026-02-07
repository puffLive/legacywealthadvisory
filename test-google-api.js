// Test script for Google Places API
const API_KEY = 'AIzaSyAMtnkJzeql49c6J7eR0s1h-jKDlwlTcxY';
const PLACE_ID = 'ChIJJTxlNPfBLYsRQ-In0l6Idck';

async function testGoogleAPI() {
  console.log('Testing Google Places API...\n');
  console.log('Place ID:', PLACE_ID);
  console.log('API Key:', API_KEY.substring(0, 10) + '...\n');

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      console.log('✅ SUCCESS! API is working!\n');
      console.log('Business Name:', data.result.name);
      console.log('Rating:', data.result.rating);
      console.log('Total Reviews:', data.result.user_ratings_total);
      console.log('\nReviews Found:', data.result.reviews?.length || 0);

      if (data.result.reviews && data.result.reviews.length > 0) {
        console.log('\nFirst Review:');
        console.log('- Author:', data.result.reviews[0].author_name);
        console.log('- Rating:', data.result.reviews[0].rating);
        console.log('- Text:', data.result.reviews[0].text.substring(0, 100) + '...');
      }
    } else if (data.status === 'REQUEST_DENIED') {
      console.log('❌ REQUEST DENIED\n');
      console.log('Error:', data.error_message);
      console.log('\nThis usually means:');
      console.log('1. API key has HTTP referrer restrictions (need to remove or use IP restrictions)');
      console.log('2. API key is invalid');
      console.log('3. Places API is not enabled');
    } else {
      console.log('❌ Error Status:', data.status);
      if (data.error_message) {
        console.log('Error Message:', data.error_message);
      }
    }
  } catch (error) {
    console.log('❌ Network Error:', error.message);
  }
}

testGoogleAPI();