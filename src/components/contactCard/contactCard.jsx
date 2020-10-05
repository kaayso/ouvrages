/* eslint-disable react/prop-types */
import React from 'react';
import './contactCard.css';
import { Avatar } from 'antd';

export default function ContactCard({
  name, status, image, tel, email,
}) {
  return (
    <div className="contactCard">
      <Avatar className="contactCard__avatar" size={84} src={image} />
      <h3 className="contactCard__name">
        {name}
      </h3>
      <h5 className="contactCard__status">
        {status}
      </h5>
      <h5 className="contactCard__tel"><a href={`tel:${tel}`}>{tel}</a></h5>
      <h5 className="contactCard__email"><a href={`mailto:${email}`}>{email}</a></h5>
    </div>
  );
}
