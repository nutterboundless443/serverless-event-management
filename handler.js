const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.createEvent = async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'Events',
    Item: {
      id: data.id,
      name: data.name,
      location: data.location,
      description: data.description,
      date: data.date,
      participants: []
    }
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Event created successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create event!' })
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
      body: JSON.stringify({ error: 'Failed to get event list!' })
    };
  }
};