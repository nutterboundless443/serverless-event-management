import React, { useState } from 'react';

const CreateEvent = () => {
  const [event, setEvent] = useState({ name: '', location: '', date: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    if (response.ok) {
      alert('事件创建成功！');
    } else {
      alert('事件创建失败！');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={event.name} onChange={handleInputChange} placeholder="事件名称" />
      <input name="location" value={event.location} onChange={handleInputChange} placeholder="地点" />
      <input name="date" type="date" value={event.date} onChange={handleInputChange} />
      <textarea name="description" value={event.description} onChange={handleInputChange} placeholder="描述"></textarea>
      <button type="submit">创建事件</button>
    </form>
  );
};

export default CreateEvent;
