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
      body: JSON.stringify({ message: '事件创建成功！' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '事件创建失败！' })
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
      body: JSON.stringify({ error: '获取事件列表失败！' })
    };
  }
};
