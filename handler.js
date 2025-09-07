const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.createEvent = async (event) => {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON format in request body.' })
    };
  }
  if (!data.id || !data.date) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields: id and date.' })
    };
  }
  const params = {
    TableName: 'Events',
    Item: {
      id: data.id,
      name: data.name || 'Unnamed Event',
      location: data.location || 'Unknown Location',
      description: data.description || '',
      date: data.date,
      participants: data.participants || []
    }
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Event created successfully!', eventId: data.id })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not create the event due to server error.', details: error.message })
    };
  }
};

module.exports.getEvents = async () => {
  const params = {
    TableName: 'Events'
  };

  try {
    const data = await dynamoDb.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to get event list!', details: error.message })
    };
  }
};